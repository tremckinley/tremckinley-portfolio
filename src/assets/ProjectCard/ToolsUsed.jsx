export default function ToolsUsed(props) {
    const {tools} = props;
    function toolMaker(tool) {
        return ("fa-"+tool)
    }
    return (
        <div className="flex w-full">
            {tools && tools.map((tool) => {
               return <i className={"mx-1 text-md fa-brands "+toolMaker(tool)}></i>
            })}
        </div>
    )
}