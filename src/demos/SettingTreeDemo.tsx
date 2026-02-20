import { useState } from 'react';
import { SettingsTree } from '../components/layout/SettingsTree';
import type { SettingTreeSection } from '../components/layout/SettingsTree';

export function SettingTreeDemo() {
  const [settingTreeTab, setSettingTreeTab] = useState('panel');
  const [settingTreeSearch, setSettingTreeSearch] = useState('');
  const [titleVal, setTitleVal] = useState('3D');
  const [fixedFrame, setFixedFrame] = useState('');
  const [displayFrame, setDisplayFrame] = useState('scene');
  const [followMode, setFollowMode] = useState('Position');
  const [showRenderStats, setShowRenderStats] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [labelScale, setLabelScale] = useState('1');
  const [ignoreCollada, setIgnoreCollada] = useState(false);
  const [meshUpAxis, setMeshUpAxis] = useState('Z-up');
  const [syncCamera, setSyncCamera] = useState(false);
  const [distance, setDistance] = useState('2.204');
  const [view3d, setView3d] = useState(false);
  const [targetX, setTargetX] = useState('1.078');
  const [targetY, setTargetY] = useState('0.181');
  const [targetZ, setTargetZ] = useState('0');
  const [theta, setTheta] = useState('58.3');

  const settingTreeSections: SettingTreeSection[] = [
    {
      id: 'frame',
      label: 'Frame',
      expanded: true,
      children: [
        { type: 'text', id: 'title', label: 'Title', value: titleVal, onChange: setTitleVal },
        {
          type: 'select',
          id: 'fixed-frame',
          label: 'Fixed frame',
          value: fixedFrame,
          options: [{ value: '', label: '' }, { value: 'world', label: 'world' }, { value: 'map', label: 'map' }],
          onChange: setFixedFrame,
        },
        {
          type: 'select',
          id: 'display-frame',
          label: 'Display frame',
          value: displayFrame,
          options: [{ value: 'scene', label: 'scene' }, { value: 'world', label: 'world' }],
          onChange: setDisplayFrame,
          warning: true,
        },
        {
          type: 'select',
          id: 'follow-mode',
          label: 'Follow mode',
          value: followMode,
          options: [{ value: 'Position', label: 'Position' }, { value: 'Follow', label: 'Follow' }],
          onChange: setFollowMode,
        },
      ],
    },
    {
      id: 'scene',
      label: 'Scene',
      expanded: true,
      children: [
        { type: 'toggle', id: 'show-render-stats', label: 'Show render stats', value: showRenderStats, onChange: setShowRenderStats },
        { type: 'color', id: 'background', label: 'Background', value: backgroundColor, onChange: setBackgroundColor },
        { type: 'number', id: 'label-scale', label: 'Label scale', value: labelScale, onChange: setLabelScale },
        { type: 'toggle', id: 'ignore-collada', label: 'Ignore COLLADA <up_axis>', value: ignoreCollada, onChange: setIgnoreCollada },
        {
          type: 'select',
          id: 'mesh-up-axis',
          label: 'Mesh up-axis',
          value: meshUpAxis,
          options: [{ value: 'Z-up', label: 'Z-up' }, { value: 'Y-up', label: 'Y-up' }],
          onChange: setMeshUpAxis,
        },
      ],
    },
    {
      id: 'view',
      label: 'View',
      expanded: true,
      children: [
        { type: 'toggle', id: 'sync-camera', label: 'Sync camera', value: syncCamera, onChange: setSyncCamera },
        { type: 'number', id: 'distance', label: 'Distance', value: distance, onChange: setDistance },
        { type: 'toggle', id: '3d-view', label: '3D view', value: view3d, onChange: setView3d },
        { type: 'number', id: 'target-x', label: 'Target X', value: targetX, onChange: setTargetX },
        { type: 'number', id: 'target-y', label: 'Y', value: targetY, onChange: setTargetY },
        { type: 'number', id: 'target-z', label: 'Z', value: targetZ, onChange: setTargetZ },
        { type: 'number', id: 'theta', label: 'Theta', value: theta, onChange: setTheta },
      ],
    },
  ];

  return (
    <SettingsTree
      tabs={[
        { id: 'panel', label: 'Panel' },
        { id: 'topics', label: 'Topics' },
        { id: 'problems', label: 'Problems' },
      ]}
      activeTabId={settingTreeTab}
      onTabChange={setSettingTreeTab}
      title="3D panel"
      searchPlaceholder="Search panel settings..."
      searchValue={settingTreeSearch}
      onSearchChange={setSettingTreeSearch}
      sections={settingTreeSections}
    />
  );
}
