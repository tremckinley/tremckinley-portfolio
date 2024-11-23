export default function ToolsUsed(props) {
    const {tools} = props;
    function toolMaker(tool) {
        return ("fa-"+tool)
    }
    return (
        <div className="flex w-full text-slate-500">
            {tools && tools.map((tool) => {
                if (tool=="code") {
                    return <i key={tool} className={"fa fa-code"}></i>
                } else {
               return <i key={tool} className={"mr-2 text-lg fa-brands "+toolMaker(tool)}></i> }
            })}
        </div>
    )
}