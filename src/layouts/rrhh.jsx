import { Routes, Route } from "react-router-dom";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

export function RRHH() {

    return (
        <div className="relative min-h-screen w-full">
            <Routes>
                {routes.map(
                    ({ layout, pages }) =>
                        layout === "rrhh" &&
                        pages.map(({ path, element }) => (
                            <Route exact path={path} element={element} />
                        ))
                )}
            </Routes>
        </div>
    );
}

RRHH.displayName = "/src/layout/RRHH.jsx";

export default RRHH;
