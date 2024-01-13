const GeneralSetting = () => {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-2">
            <h1
                className="text-3xl font-bold"
            >Config your Aliyun OSS</h1>
            <div className="h-0 flex-1 overflow-y-auto mt-4">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">OSS_ACCESS_KEY_ID:</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">OSS_ACCESS_KEY_SECRET:</span>
                    </div>
                    <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs"/>
                </label>
            </div>
            <div className="w-full max-w-xs flex gap-4 mt-2">
                <button className="btn btn-primary ml-auto px-3">Save Config</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    );
};

export default GeneralSetting;