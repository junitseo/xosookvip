import { Table } from "antd";
import stylesCss from "../../styles/InterpretTheDreams.module.css";
import { interpretTheDreams } from "../../app/data/interpretTheDreams";
import { useState } from "react";
import Meta from "app/components/Meta"
import PostDream from "../../app/components/PostDream";
import { getPostByTaxNew } from "../../stores/post";

const InterpretTheDreams = (props) => {
    const [data, setData] = useState(interpretTheDreams);
    const [news, setNew] = useState(props.data.datas);

    const columns = [
        {
            title: 'Tên giấc mơ',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Bộ số',
            dataIndex: 'number',
            sorter: (a, b) => a.number.length - b.number.length,
            sortDirections: ['descend'],
        },
    ];

    const searchInterpretTheDreams = (event) => {
        if (event.length > 0) {
            const search = new RegExp(event, 'i');
            const searchData = [];
            interpretTheDreams.map((item) => {
                if (search.test(item.name)) {
                    searchData.push(item);
                }
            })
            setData(searchData);
        } else {
            setData(interpretTheDreams);
        }
    }

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Giải mã những giấc mơ" />
            <div className={stylesCss["container"]}>
                <div className={stylesCss["panel-heading"]}>
                    <h1>Giải mã bí ẩn của giấc mơ (tham khảo)</h1>
                </div>
                <div className={stylesCss["container-dream"]}>
                    <div className={stylesCss["post-dream"]}>
                        <PostDream data={news}/>
                    </div>
                    <div className={stylesCss["table-dream"]}>
                        <div className={stylesCss["row"]}>
                            <div className={stylesCss["col-sm-6-right"]}>
                                <div className={stylesCss["dataTables-filter"]}>
                                    <label>Search:
                                        <input onChange={(e) => searchInterpretTheDreams(e.target.value)} className={stylesCss["input-sm"]} type="search" placeholder="" aria-controls="example" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={stylesCss["container-table"]}>
                            <Table columns={columns} dataSource={data} pagination={{ pageSize: 20 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const slug = "giai-ma-giac-mo";
    const [
        data
    ] = await Promise.all([
        getPostByTaxNew(slug, 5, 0)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default InterpretTheDreams;