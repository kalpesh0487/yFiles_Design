import useTreeSideBarStore from "../store/TreeSidebarStore";

const TreeSidebar = () => {
  const {
    isGeneralOpen,
    isEdgesOpen,
    isLabellingOpen,
    sample,
    preset,
    orientation,
    actOnSelectionOnly,
    edgeStyle,
    arrowSize,
    toggleGeneral,
    toggleEdges,
    toggleLabelling,
    setSample,
    setPreset,
    setOrientation,
    toggleActOnSelectionOnly,
    setEdgeStyle,
    setArrowSize,
  } = useTreeSideBarStore();

  return (
    <>
      <div className="flex items-center justify-between mb-2 w-full">
        <label className="text-sm text-black whitespace-nowrap flex items-center">Sample</label>
        <select
          value={sample}
          onChange={(e) => setSample(e.target.value)}
          className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Default</option>
          <option>Multi-Parent Tree</option>
          <option>Organization chart</option>
          <option>Mindmap</option>
        </select>
      </div>

      <div className="w-full h-[1px] bg-black mt-3"></div>

      <div className="flex items-center justify-between mt-2 w-full mb-2">
        <label className="text-sm text-black whitespace-nowrap flex items-center">Preset:</label>
        <select
          value={preset}
          onChange={(e) => setPreset(e.target.value)}
          className="w-55 p-0.5 text-[15px] border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Default</option>
          <option>Compact</option>
          <option>Mindmap</option>
        </select>
      </div>

      <div>
        {/* General Panel */}
        <div className="border-b">
          <button onClick={toggleGeneral} className="w-full flex items-center py-1 text-md">
            <span className={`transform transition-transform text-xl font-bold ${isGeneralOpen ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className={`font-semibold ${isGeneralOpen ? 'ml-2' : 'ml-3'}`}>General</span>
          </button>

          {isGeneralOpen && (
            <div className="pb-4">
              <div className="flex items-center justify-between mb-2 w-full">
                <label className="text-sm text-black whitespace-nowrap flex items-center">Orientation</label>
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Top to Bottom</option>
                  <option>Bottom to Top</option>
                  <option>Left to Right</option>
                  <option>Right to Left</option>
                </select>
              </div>

              <div className="mt-3">
                <div className="flex items-center my-2 justify-between">
                  <label className="text-sm text-black">Act on Selection Only</label>
                  <input
                    type="checkbox"
                    checked={actOnSelectionOnly}
                    onChange={toggleActOnSelectionOnly}
                    className="h-4 w-4"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Edges Panel */}
        <div className="border-b">
          <button onClick={toggleEdges} className="w-full flex items-center py-1 text-md">
            <span className={`transform transition-transform text-xl font-bold ${isEdgesOpen ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className={`font-semibold ${isEdgesOpen ? 'ml-2' : 'ml-3'}`}>Edges</span>
          </button>

          {isEdgesOpen && (
            <div className="pb-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Edge Style:</span>
                  <select
                    value={edgeStyle}
                    onChange={(e) => setEdgeStyle(e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option>straight</option>
                    <option>curved</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Arrow Size:</span>
                  <input
                    type="number"
                    value={arrowSize}
                    onChange={(e) => setArrowSize(Number(e.target.value))}
                    className="w-20 p-1 border rounded"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Labelling Panel */}
        <div className="border-b">
          <button onClick={toggleLabelling} className="w-full flex items-center py-1 text-md">
            <span className={`transform transition-transform text-xl font-bold ${isLabellingOpen ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className={`font-semibold ${isLabellingOpen ? 'ml-2' : 'ml-3'}`}>Labelling</span>
          </button>

          {isLabellingOpen && (
            <div className="pb-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4" />
                  <label className="ml-2 text-sm text-gray-700">Show Node Labels</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4" />
                  <label className="ml-2 text-sm text-gray-700">Show Edge Labels</label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Font Size:</span>
                  <input type="number" className="w-20 p-1 border rounded" defaultValue={12} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Save and Preview buttons at the bottom */}
      <div className="flex justify-between my-2 mt-4">
        <div className="border p-1 rounded-lg px-2 cursor-pointer">Preview</div>
        <div className="border p-1 rounded-lg px-2 bg-[#1E1E1E] cursor-pointer text-white">Save Settings</div>
      </div>
    </>
  );
};

export default TreeSidebar;