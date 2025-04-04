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
    portAssignment,
    routingStyleForNonTreeEdges,

    //label

    edgeLabelPlacementTree,
    nodeLabelPlacementTree,
    edgeOrientationTreeTree,
    alongEdgeTree,
    sideOfSideTree,

    toggleGeneral,
    toggleEdges,
    toggleLabelling,
    setSample,
    setPreset,
    setOrientation,
    toggleActOnSelectionOnly,
    setPortAssignment,
    setRoutingStyleForNonTreeEdges,

    setEdgeLabelPlacementTree,
    setNodeLabelPlacementTree,
    setEdgeOrientationTreeTree,
    setAlongEdgeTree,
    setSideOfSideTree,
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
                  <span className="text-sm ">Port Assignment:</span>
                  <select
                    value={portAssignment}
                    onChange={(e) => setPortAssignment(e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option>None</option>
                    <option>Distributed Top</option>
                    <option>Distributed Bottom</option>
                    <option>Distributed Left</option>
                    <option>Distributed Right</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Routing Style for Non-Tree Edges:</span>
                  <select
                    value={routingStyleForNonTreeEdges}
                    onChange={(e) => setRoutingStyleForNonTreeEdges(e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option>Orthogonal</option>
                    <option>Organic</option>
                    <option>Straight-Line</option>
                    <option>Bundled</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

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
                <div className='flex items-center justify-between '>
                  <span className='text-sm'>Node Labelling</span>
                  <select
                    value={nodeLabelPlacementTree}
                    onChange={(e) => setNodeLabelPlacementTree(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Consider</option>
                    <option>Generic</option>
                    <option>Ignore</option>
                  </select>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Edge Labelling</span>
                  <select
                    value={edgeLabelPlacementTree}
                    onChange={(e) => setEdgeLabelPlacementTree(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Ignore</option>
                    <option>Integrated</option>
                    <option>Generic</option>
                  </select>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Orientation</span>
                  <select
                    value={edgeOrientationTreeTree}
                    onChange={(e) => setEdgeOrientationTreeTree(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Parallel</option>
                    <option>Orthogonal</option>
                    <option>Horizontal</option>
                    <option>Vertical</option>
                  </select>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Along Edge</span>
                  <select
                    value={alongEdgeTree}
                    onChange={(e) => setAlongEdgeTree(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Anywhere</option>
                    <option>At Source</option>
                    <option>At Source Port</option>
                    <option>At Target</option>
                    <option>At Target Port</option>
                    <option>Centered</option>
                  </select>
                </div>

                <div className='flex items-cente justify-between'>
                  <span className='text-sm'>Side of Edge</span>
                  <select
                    value={sideOfSideTree}
                    onChange={(e) => setSideOfSideTree(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Anywhere</option>
                    <option>On Edge</option>
                    <option>Left</option>
                    <option>Right</option>
                    <option>Left or Right</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between my-2 mt-4">
        <div className="border p-1 rounded-lg px-2 cursor-pointer">Preview</div>
        <div className="border p-1 rounded-lg px-2 bg-[#1E1E1E] cursor-pointer text-white">Save Settings</div>
      </div>
    </>
  );
};

export default TreeSidebar;