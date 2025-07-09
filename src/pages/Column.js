import SectionTitle from "../components/SectionTitle";
import PaginationExample from "../components/PaginationExample";

import "../App.css";

function Column() {
  return (
    <div>
      <div class="title">
        <SectionTitle title="NEWS" subtitle="お知らせ" align="left" />
      </div>
      <div class="column-list">
        <PaginationExample />
      </div>
    </div>
  );
}

export default Column;
