import useOrganicSideBarStore from "../store/sideBarOrganicStore";

const OrganicSidebar = () => {
  const {
    isGeneralOpen,
    isEdgesOpen,
    isLabellingOpen,
    sample,
    preset,
    scope,
    preferredEdgeLength,
    minimumNodeDistance,
    avoidNodeEdgeOverlap,
    compactness,
    orientation,
    clustering,
    edgeStyle,
    arrowSize,
    edgeLabelPlacementOrganic,
    nodeLabelPlacementOrganic,
    edgeOrientationOrganic,
    alongEdgeOrganic,
    sideOfSideOrganic,

    toggleGeneral,
    toggleEdges,
    toggleLabelling,
    setSample,
    setPreset,
    setScope,
    setPreferredEdgeLength,
    setMinimumNodeDistance,
    toggleAvoidNodeEdgeOverlap,
    setCompactness,
    setOrientation,
    setClustering,
    setEdgeStyle,
    setArrowSize,

    setEdgeLabelPlacementOrganic ,
    setNodeLabelPlacementOrganic ,
    setEdgeOrientationOrganic,
    setAlongEdgeOrganic,
    setSideOfSideOrganic,
  } = useOrganicSideBarStore();

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
          <option>Mesh</option>
          <option>Sub Structures</option>
          <option>Disk Structures</option>
          <option>Computer Network</option>
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
          <option>Substructures</option>
          <option>Clustered Substructures</option>
          <option>Clustered</option>
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
                <label className="text-sm text-black whitespace-nowrap flex items-center">Scope</label>
                <select
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All</option>
                  <option>Selection</option>
                  <option>Selection and Connected Nodes</option>
                  <option>Selection and Nearby Nodes</option>
                </select>
              </div>

              <div className="flex items-center justify-between mb-2 w-full">
                <label className="text-sm text-black whitespace-nowrap flex items-center">Orientation</label>
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>None</option>
                  <option>Top to Bottom</option>
                  <option>Left to Right</option>
                  <option>Bottom to Top</option>
                  <option>Right to Left</option>
                </select>
              </div>

              <div className="flex items-center justify-between mb-2 w-full">
                <label className="text-sm text-black whitespace-nowrap flex items-center">Clustering</label>
                <select
                  value={clustering}
                  onChange={(e) => setClustering(e.target.value)}
                  className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>None</option>
                  <option>Edge Betweenness</option>
                  <option>Label Propagation</option>
                  <option>Louvain Modularity</option>
                </select>
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Preferred Edge Length</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={preferredEdgeLength}
                    onChange={(e) => setPreferredEdgeLength(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{preferredEdgeLength}</span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Minimum Node Distance</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={minimumNodeDistance}
                    onChange={(e) => setMinimumNodeDistance(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{minimumNodeDistance}</span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Compactness</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={compactness}
                    onChange={(e) => setCompactness(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{compactness / 100}</span>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center my-2 justify-between">
                  <label className="text-sm text-black">Avoid Node/Edge Overlap</label>
                  <input
                    type="checkbox"
                    checked={avoidNodeEdgeOverlap}
                    onChange={toggleAvoidNodeEdgeOverlap}
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
            <div className="pb-4 pointer-events-none opacity-50 text-gray-400">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm ">Edge Style:</span>
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
                  <span className="text-sm ">Arrow Size:</span>
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
                    value={nodeLabelPlacementOrganic}
                    onChange={(e) => setNodeLabelPlacementOrganic(e.target.value)}
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
                    value={edgeLabelPlacementOrganic}
                    onChange={(e) => setEdgeLabelPlacementOrganic(e.target.value)}
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
                    value={edgeOrientationOrganic}
                    onChange={(e) => setEdgeOrientationOrganic(e.target.value)}
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
                    value={alongEdgeOrganic}
                    onChange={(e) => setAlongEdgeOrganic(e.target.value)}
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
                    value={sideOfSideOrganic}
                    onChange={(e) => setSideOfSideOrganic(e.target.value)}
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

        <div className="flex justify-between my-2">
          <div className="border p-1 rounded-lg px-2 cursor-pointer">Preview</div>
          <div className="border p-1 rounded-lg px-2 bg-[#1E1E1E] cursor-pointer text-white">Save Settings</div>
        </div>
      </div>
    </>
  );
};

export default OrganicSidebar;