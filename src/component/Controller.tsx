import { Component } from "react";
import Wallet from "../bsc/Wallet";
import NYCakeContract from "../contracts/NYCakeContract";

export default class Controller extends Component {

    private claim = () => {
        NYCakeContract.claim();
    };

    private connect = () => {
        Wallet.forceConnect();
    };

    public render() {
        return <main>
            <a onClick={this.claim}>CLAIM</a>
            <a onClick={this.connect}>CONNECT</a>
        </main>;
    }
}
