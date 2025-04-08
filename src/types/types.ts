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

export type NetworkData = {
    nodes: Node[];
    connections: Connection[];
};

export enum LabelPlacementOrientation {
    PARALLEL,
    ORTHOGONAL,
    HORIZONTAL,
    VERTICAL
};