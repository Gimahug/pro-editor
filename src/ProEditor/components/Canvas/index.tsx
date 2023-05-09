import { AimOutlined, StopOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import FreeCanvas from '../../../FreeCanvas';
import { useStore } from '../../store';
import Component from './Component';

const Canvas: FC = memo(() => {
  const [viewport, updatePresenceEditor, componentAsset] = useStore(
    (s) => [
      s.presenceEditor.viewport,
      s.internalUpdatePresenceEditor,
      s.componentAsset,
    ],
    shallow,
  );
  const [enableCanvasInteraction, toggleCanvasInteraction] = useStore(
    (s) => [s.enableCanvasInteraction, s.toggleCanvasInteraction],
    shallow,
  );

  const ErrorBoundary = componentAsset.ErrorBoundary;

  return (
    <ErrorBoundary>
      <FreeCanvas
        viewport={viewport}
        onViewportChange={(viewport) => {
          updatePresenceEditor({ viewport });
        }}
        extraControlBtns={[
          <Tooltip
            title={`画布交互：已${enableCanvasInteraction ? '启用' : '禁用'}`}
            key="interaction"
          >
            <Button
              icon={
                enableCanvasInteraction ? <AimOutlined /> : <StopOutlined />
              }
              onClick={toggleCanvasInteraction}
            />
          </Tooltip>,
        ]}
      >
        <Component />
      </FreeCanvas>
    </ErrorBoundary>
  );
});

export default Canvas;