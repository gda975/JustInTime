import Atom from '../AtomMain/Atom';

export default function MainFeed(props) {
    return (
        <div className="sub-main-container">
            <h1>UNC Center for Nursing Excellence</h1>
            <h2>Just in Time Feed</h2>
            <h2>{props.category}</h2>
            {props.insertButton}
            {!props.entries || props.entries.length === 0 ? (
                <h3>No entries</h3>
            ) : (
                props.entries.map((val, index) => {
                    return (
                        <Atom
                            key={val}
                            currentCategory={props.category}
                            val={val}
                            index={index}
                            entriesCallback={props.entriesCallback}
                        />
                    );
                })
            )}
        </div>
    );
}
