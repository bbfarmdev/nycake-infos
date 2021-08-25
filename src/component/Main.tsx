import { Component } from "react";
import { Timeline } from "react-twitter-widgets";

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
            <Timeline
                dataSource={{
                    sourceType: "profile",
                    screenName: "NYCAKE_BSC"
                }}
                options={{
                    height: "600"
                }}
            />
        </main>;
    }
}
