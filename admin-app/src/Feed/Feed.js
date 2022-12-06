import MainFeed from './MainFeed';

export default function Feed(props) {
    return (
        <div className="feed-container">
            <div className="category-button-container">
                <h2>Choose Categories</h2>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="ALL"
                >
                    All Categories
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Workplace Updates"
                >
                    Workplace Updates
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Policy Links"
                >
                    Policy Links
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Instructional Videos"
                >
                    Instructional Videos
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Useful Sites"
                >
                    Useful Sites
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Helpful Reading"
                >
                    Helpful Reading
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Staff Events"
                >
                    Staff Events
                </button>
                <button
                    className="category-button"
                    onClick={(e) => {
                        props.setCategory(e.target.value);
                    }}
                    type="button"
                    value="Other"
                >
                    Other Resources
                </button>
            </div>
            <MainFeed
                category={props.category}
                entries={props.globalEntries}
                entriesCallback={props.setEntries}
            />
        </div>
    );
}
