export default function Container(props) {
    return (
        <div>
            <div className="flex">
                <div className="font-bold text-xl flex-1">{props.title}</div>
                <div className="font-medium">
                    See All
                    <span className="icon-spritesheet-2 icon-arrow-right ml-2"></span>
                </div>
            </div>
            <div className="px-1 py-2">
                {props.children}
            </div>
        </div>
    )

}