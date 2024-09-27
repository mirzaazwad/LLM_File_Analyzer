const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


export class RouteTemplate{
    private basePath:string;
    public paths:Map<string,string>;

    constructor(basePath:string){
        this.basePath=basePath;
        this.paths=new Map<string,string>();
    }

    register(endpoints:Object):Map<string,string>{
        for(let [key,value] of Object.entries(endpoints)){
            this.paths.set(key,`${BACKEND_URL}${this.basePath}${value}`)
        }
        return this.paths;
    }
}