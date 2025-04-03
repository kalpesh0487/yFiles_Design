import useOrthogonalSideBarStore from "../store/OrthogonalSideBarStore";

const OrthogonalSidebar = () => {
  const {
    isGeneralOpen,
    isEdgesOpen,
    isLabellingOpen,
    sample,
    preset,
    layoutMode,
    gridSpacing,
    edgeStyle,
    arrowSize,
    // New edge properties
    minimumFirstSegmentLengthOrthogonal,
    minimumSegmentLength,
    minimumLastSegmentLengthOrthogonal,
    routeSelectedEdgesDownwards,

    edgeLabelPlacementOrthogonal,
    nodeLabelPlacementOrthogonal,
    edgeOrientationOrthogonal,
    alongEdgeOrthogonal,
    sideOfSideOrthogonal,

    

    toggleGeneral,
    toggleEdges,
    toggleLabelling,
    setSample,
    setPreset,
    setLayoutMode,
    setGridSpacing,
    setEdgeStyle,
    setArrowSize,
    setMinimumFirstSegmentLengthOrthogonal,
    setMinimumSegmentLength,
    setMinimumLastSegmentLengthOrthogonal,
    toggleRouteSelectedEdgesDownwards,

    setEdgeLabelPlacementOrthogonal,
    setNodeLabelPlacementOrthogonal,
    setEdgeOrientationOrthogonal,
    setAlongEdgeOrthogonal,
    setSideOfSideOrthogonal,
  } = useOrthogonalSideBarStore();

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
          <option>Sub Structures</option>
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
                <label className="text-sm text-black whitespace-nowrap flex items-center">Layout Mode</label>
                <select
                  value={layoutMode}
                  onChange={(e) => setLayoutMode(e.target.value)}
                  className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Strict</option>
                  <option>Relaxed</option>
                  <option>Forced Straight Line</option>
                </select>
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Grid Spacing</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={gridSpacing}
                    onChange={(e) => setGridSpacing(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{gridSpacing}</span>
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
                <div className="flex flex-col">
                  <span className="text-sm ">Minimum First Segment Length:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumFirstSegmentLengthOrthogonal}
                      onChange={(e) => setMinimumFirstSegmentLengthOrthogonal(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumFirstSegmentLengthOrthogonal}</span>
                  </div>
                </div>

                
                <div className="flex flex-col">
                  <span className="text-sm ">Minimum Segment Length:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumSegmentLength}
                      onChange={(e) => setMinimumSegmentLength(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumSegmentLength}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm ">Minimum Last Segment Length:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumLastSegmentLengthOrthogonal}
                      onChange={(e) => setMinimumLastSegmentLengthOrthogonal(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumLastSegmentLengthOrthogonal}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Route Selected Edges Downwards:</span>
                  <input
                    type="checkbox"
                    checked={routeSelectedEdgesDownwards}
                    onChange={toggleRouteSelectedEdgesDownwards}
                    className="h-4 w-4"
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
                    value={nodeLabelPlacementOrthogonal}
                    onChange={(e) => setNodeLabelPlacementOrthogonal(e.target.value)}
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
                    value={edgeLabelPlacementOrthogonal}
                    onChange={(e) => setEdgeLabelPlacementOrthogonal(e.target.value)}
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
                    value={edgeOrientationOrthogonal}
                    onChange={(e) => setEdgeOrientationOrthogonal(e.target.value)}
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
                    value={alongEdgeOrthogonal}
                    onChange={(e) => setAlongEdgeOrthogonal(e.target.value)}
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
                    value={sideOfSideOrthogonal}
                    onChange={(e) => setSideOfSideOrthogonal(e.target.value)}
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

export default OrthogonalSidebar;