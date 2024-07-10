import { AppBar } from "../components/AppBar"
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signup = () => {
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <AppBar type="New" name="dsds"/>
            <div>
                <Auth type={"signup"}/>
            </div>
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    </>
}