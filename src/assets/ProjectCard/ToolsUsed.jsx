export default function ToolsUsed(props) {
    const {tools} = props;
    function toolMaker(tool) {
        return ("fa-"+tool)
    }
    return (
        <div className="flex w-full">
            {tools && tools.map((tool) => {
               return <i className={"mr-1 text-lg fa-brands "+toolMaker(tool)}></i>
            })}
        </div>
    )
}