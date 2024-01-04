type IConfig = {
    debug: boolean;
    port: string;
    service_name: string;
};

type IPMXConfig = {
    module_conf: IConfig;
};

type PM2BusResponse<T> = {
    type: string;
    data: { instanceId: number; requestId: string; message: T };
};
