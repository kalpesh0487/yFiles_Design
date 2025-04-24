export enum DeviceType {
    BACKHAUL = "backhaul",
    FAT_SWITCH = "fat-switch",
    SWITCH = "switch",
    UNKNOWN = "unknown",
    INTERNET = "internet",
    WAN = "WAN",
    ROUTER = "router",
    LOAD_BALANCER = "load-balancer",
    FIREWALL = "firewall"
}

export enum Status {
    ACTIVE = "active",
    WARNING = "warning",
    INACTIVE = "inactive",
    EMPTY = ""
}

export type Node = {
    id: string;
    label: string;
    ip: string;
    type: DeviceType;
    status: Status;
};

export type Connection = {
    source: string;
    target: string;
    color: string;
    dashed: boolean;
    label: string;
    status: Status;
};

export interface NetworkGroup {
    id: string; 
    nodeIds: string[]; 
    label?: string;  
}

export type NetworkData = {
    nodes: Node[];
    connections: Connection[];
    groups: NetworkGroup[]
};

export enum LabelPlacementOrientation {
    PARALLEL,
    ORTHOGONAL,
    HORIZONTAL,
    VERTICAL
};


export type FormData = {
    label: string;
    type: string;
    ip: string;
    status: string;
};