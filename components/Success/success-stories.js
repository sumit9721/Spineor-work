import Youtube from "./Youtube"
import Outlink from "./Outlink"

const Success = (props) => {
    return (
        <React.Fragment>
        <section className="banner">
            <div className="container">
                {props.alignment === "right" ? (
                    <div className="row">
                        <div className="col-md-4">
                            <div className="center">
                                <img className="trello-logo" src={props.title} />
                                <p>{props.content}</p>
                                <div className="logo">
                                    <img className="node" src={props.node} />
                                    <img className="react" src={props.react} />
                                    <img className="mongodb" src={props.mongodb} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <img className="image" src={props.image}></img>
                        </div>
                    </div>
                ) : (
                    <>
                    <div className="row">
                        <div className="col-md-8">
                            <img className="image" src={props.image}></img>
                        </div>
                        <div className="col-md-4">
                            <div className="center">
                                <img className="trello-logo" src={props.title} />
                                <p>{props.content}</p>
                                <div>
                                <img className="node" src={props.node} />
                                    <img className="react" src={props.react} />
                                    <img className="mongodb" src={props.mongodb} />
                                </div>
                            </div>
                        </div>
                        </div>
                        </>
                    )
                }
            </div>
        </section>
            <style jsx>{`
            p {
                font-weight: 300;
                font-size: 30px;
                line-height: 35px;
                text-align: justify;
            }
            .trello-logo {
                width: 261px;
                height: 70px;
            }
            .node {
                width: 85px;
                height: 85px;
            }
            .react {
                width: 104px;
                height: 35px;
                padding: 0px 10px;
            }
            .mongodb {
                width: 135px;
                height: 37px;
                padding: 0px 10px;
            }
            `}</style>
        </React.Fragment>
    )
}
export default Success