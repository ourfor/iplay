import { User } from "@model/User";
import { getPlaybackInfo } from "./play";
import { getLatestMedia, getMedia, getView } from "./view";
import { getPublicInfo } from "./info";
import { login } from "./login";

export class Emby {
    private _user?: User;
    get user() {
        if (!this._user) throw Error("user can't be null")
        return this._user;
    }
    set user(user: User) {
        this._user = user
        this.bind()
    }

    constructor(user?: User) {
        this._user = user
        this.bind()
    }

    bind() {
        this.getMedia = getMedia.bind(this, this.user)
        this.getPlaybackInfo = getPlaybackInfo?.bind(this, this.user)
        this.getView = getView.bind(this, this.user)
        this.getLatestMedia = getLatestMedia.bind(this, this.user)
    }

    public getPlaybackInfo = this._user ? getPlaybackInfo.bind(this, this.user) : null
    public getMedia = this._user ? getMedia.bind(this, this.user) : null
    public getView = this._user ? getView.bind(this, this.user) : null
    public getLatestMedia = this._user ? getLatestMedia.bind(this, this.user) : null
    public getPublicInfo = getPublicInfo
}

export const Api = {
    emby: null as Emby|null,
    login: login
};