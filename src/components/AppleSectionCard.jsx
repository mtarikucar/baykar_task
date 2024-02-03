function AppleSectionCard({img}) {
    return (
        <div className="border-8 rounded-3xl drop-shadow-lg bg-white h-fit border-white">
            <div className={"h-4 flex items-start justify-start my-4"}>
                <span className={"h-4  w-4 aspect-square bg-red-600 rounded-full"}></span>
                <span className={"h-4 ml-2 w-4 aspect-square bg-yellow-400 rounded-full"}></span>
                <span className={"h-4 ml-2 w-4 aspect-square bg-green-600 rounded-full"}></span>
            </div>
            <img className={"rounded-b-3xl"}
                 src={img}
                 alt="Apple Section"/>
        </div>
    );
}

export default AppleSectionCard;
