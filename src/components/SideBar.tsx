import useSideBarStore from '../store/sideBarStore';
import CircularSidebar from './CircularSidebar';
import HierarchicalSidebar from './HierarchicalSidebar';
import OrganicSidebar from './OrganicSidebar';
import OrthogonalSidebar from './OrthogonalSidebar';
import TreeSidebar from './TreeSidebar';

const SideBar = () => {
  const {
    isCollapsed,
    layout,
    toggleCollapse,
    setLayout,
  } = useSideBarStore();

  return (
    <div
      className={`absolute right-3 top-0 rounded-md my-3 h-[99vh] border bg-white border-l-2 shadow-lg p-4 pt-4 transition-all duration-300 ${
        isCollapsed ? 'w-[40px] overflow-hidden' : 'w-85'
      }`}
    >
      <div
        className={`absolute ${isCollapsed ? `z-40 left-[7px]` : `left-[-12px]`} top-6 transform -translate-y-1/2 bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer border font-semibold border-black shadow-lg`}
        onClick={toggleCollapse}
      >
        {isCollapsed ? '<' : '>'}
      </div>

      {!isCollapsed && (
        <>
          <div className="flex">
            <h2 className="text-xl text-black mb-3 ml-2">TOPOLOGY SETTINGS</h2>
          </div>

          <div className="flex items-center justify-between mb-2 w-full">
            <label className="text-sm text-black whitespace-nowrap flex items-center">Layout</label>
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="w-55 p-0.5 text-[15px] border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Hierarchical</option>
              <option>Organic</option>
              <option>Orthogonal</option>
              <option>Circular</option>
              <option>Tree</option>
            </select>
          </div>

          {/* Render layout-specific sidebars */}
          {layout === 'Hierarchical' && <HierarchicalSidebar />}
          {layout === 'Organic' && <OrganicSidebar />}
          {layout === 'Orthogonal' && <OrthogonalSidebar />}
          {layout === 'Circular' && <CircularSidebar />}
          {layout === 'Tree' && <TreeSidebar />}
        </>
      )}

      <div>
        <div
          className={`absolute ${isCollapsed ? `z-40 left-[7px]` : `left-[-30px]`} bottom-10 transform -translate-y-1/2 bg-slate-200 w-6 h-6 flex rounded-sm items-center justify-center cursor-pointer border font-semibold border-black`}
        >
          +
        </div>
        <div
          className={`absolute ${isCollapsed ? `z-40 left-[7px]` : `left-[-30px]`} bottom-3 transform -translate-y-1/2 bg-slate-200 w-6 h-6 flex items-center rounded-sm justify-center cursor-pointer border font-semibold border-black`}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default SideBar;