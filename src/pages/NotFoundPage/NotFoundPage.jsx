import {Result, Button} from "antd";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, page not found."
            extra={
                <Link to="/">
                    <Button type="primary">To main page</Button>
                </Link>
            }
        />
    )
}

export default NotFoundPage;
