const SettingStructure = ({children, title, onCancel, onSave, changed}:{
    changed: boolean,
    title: string,
    children: React.ReactNode,
    onSave: () => void,
    onCancel: () => void,
}) => {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-2">
            <h1
                className="text-2xl font-bold"
            >{title}</h1>
            <div className="h-0 flex-1 overflow-y-auto w-full px-2">
                {children}
            </div>
            {/*<div className="w-full flex gap-4 mt-2">*/}
            {/*    <button*/}
            {/*        onClick={onSave}*/}
            {/*        disabled={!changed}*/}
            {/*        className="btn btn-primary ml-auto px-3">Save Config</button>*/}
            {/*    <button*/}
            {/*        onClick={onCancel}*/}
            {/*        disabled={!changed}*/}
            {/*        className="btn btn-secondary">Cancel</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default SettingStructure;