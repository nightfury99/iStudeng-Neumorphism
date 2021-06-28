import FirstContent from "./FirstContent";
import TopContent from "./TopContent";

function Content() {
    return (
        <div className="overflow-auto flex-grow h-screen pb-10 pt-12">
            <div className="mx-auto">
                {/* Top content */}
                <TopContent />
                {/* First content */}
                <FirstContent />
                {/* Second Content */}
            </div>
        </div>
    )
}

export default Content
