import Layoutpanel from "../app/layoutpanel";
import Productspanel from "@/container/productspanel";

export default function Panel() {
  return (
    <>
      <Layoutpanel>
        <Productspanel />
      </Layoutpanel>
    </>
  );
}
