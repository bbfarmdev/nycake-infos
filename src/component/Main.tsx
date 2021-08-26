import { Component } from "react";
import { Timeline } from "react-twitter-widgets";
import Controller from "./Controller";
import Middle from "./Middle";
import Right from "./Right";
import Top from "./Top";

export default class Main extends Component<{}, {
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }

    public async componentDidMount() {
    }

    public render() {
        return <main>
            <Controller />
            <Middle />
            <Top />
            <Right />
            <div className="twitter-widget">
                <Timeline
                    dataSource={{
                        sourceType: "profile",
                        screenName: "NYCAKE_BSC"
                    }}
                    options={{
                        height: "600"
                    }}
                />
            </div>
        </main>;
    }
}
