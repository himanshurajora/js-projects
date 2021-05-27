class Observable{
    constructor(subscribe){
        this._subscribe = subscribe;
    }
    subscribe(observe){
        return this._subscribe(observe)
    }
}