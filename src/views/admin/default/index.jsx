import Introduce from "../../../components/Introduce";
import Best from "../../../components/Best";
import JoinUs from "../../../components/Joinus";
import World from "../../../components/World";
import Collection from "../../../components/Collection";
import SliderCustom from "../../../components/SliderCustom";
import Quiz from "../../../components/Quiz";

const Dashboard = () => {
    return (
        <div>
            <Introduce/>
            <Best/>
            <JoinUs/>
            <SliderCustom items={["https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/59874601227eb55bcd3d9f12869494734bcd479c7e95d9696d541c5da55f2d59?apiKey=3faea891e991492ab96a4c886843331a&"]}/>
            <Collection/>

            <World/>

        </div>
    );
};

export default Dashboard;
