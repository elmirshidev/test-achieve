export default async function MenuUnderline() {
    return (
        <div className={`flex items-center gap-x-1`}>
            <span className={`bg-white h-[5px] w-[20px] rounded-md`}></span>
            <span className={`bg-white h-[5px] w-[55px] rounded-md`}></span>
        </div>
    )
}