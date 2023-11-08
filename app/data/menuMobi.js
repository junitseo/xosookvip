import { FaEdit, FaRegChartBar, FaTable, FaTachometerAlt } from "react-icons/fa";

export const listMenu = [
    {
        name: "Xổ số ba miền",
        slug: "/",
        icon: <FaTachometerAlt />,
        iconChildren: false,
        menuChildren: []
    },
    {
        name: "Xổ số miền bắc",
        slug: "/xo-so-mien-bac",
        icon: <FaTachometerAlt />,
        iconChildren: false,
        menuChildren: [],
    },
    {
        name: "Xổ số miền trung",
        slug: "/xo-so-mien-trung",
        icon: <FaTachometerAlt />,
        iconChildren: false,
        menuChildren: [
            {
                "name": "Kon Tum",
                "slug": "/kqxs/kon-tum"
              },{
                "name": "Khánh Hòa",
                "slug": "/kqxs/khanh-hoa"
              },{
                "name": "Huế",
                "slug": "/kqxs/hue"
              },{
                "name": "Phú Yên",
                "slug": "/kqxs/phu-yen"
              },{
                "name": "Dak Lak",
                "slug": "/kqxs/dak-lak"
              },{
                "name": "Quảng Nam",
                "slug": "/kqxs/quang-nam"
              },{
                "name": "Đà Nẵng",
                "slug": "/kqxs/da-nang"
              },{
                "name": "Bình Định",
                "slug": "/kqxs/binh-dinh"
              },{
                "name": "Quảng Bình",
                "slug": "/kqxs/quang-binh"
              },{

                "name": "Quảng Trị",
                
                "slug": "/kqxs/quang-tri"
              },{

                "name": "Bình Thuận",
                
                "slug": "/kqxs/binh-thuan"
              },{

                "name": "Quảng Ngãi",
                
                "slug": "/kqxs/quang-ngai"
              },{
                "name": "Dak Nông",
                
                "slug": "/kqxs/dak-nong"
              },{
                "name": "Gia Lai",
                
                "slug": "/kqxs/gia-lai"
              },{
                "name": "Đà Lạt",
                "slug": "/kqxs/da-lat"
              }
        ]
    },
    {
        name: "Xổ số miền nam",
        slug: "/xo-so-mien-nam",
        icon: <FaTachometerAlt />,
        iconChildren: false,
        menuChildren: [
            {
                "name": "Tiền Giang",
                "slug": "/kqxs/tien-giang"
              },
              {
                "name": "Kiên Giang",
                "slug": "/kqxs/kien-giang"
              },
              {
                "name": "Đồng Tháp",
                "slug": "/kqxs/dong-thap"
              },
              {
                "name": "TPHCM",
                "slug": "/kqxs/hcm"
              },
              {
                "name": "Cà Mau",
                "slug": "/kqxs/ca-mau"
              },
              {
                "name": "Vũng Tàu",
                "slug": "/kqxs/vung-tau"
              },
              {
                "name": "Bến Tre",
                "slug": "/kqxs/ben-tre"
              },
              {
                "name": "Bạc Liêu",
                "slug": "/kqxs/bac-lieu"
              },
              {
                "name": "Cần Thơ",
                "slug": "/kqxs/can-tho"
              },
              {
                "name": "Sóc Trăng",
                "slug": "/kqxs/soc-trang"
              },
              {
                "name": "Đồng Nai",
                "slug": "/kqxs/dong-nai"
              },
              {
                "name": "An Giang",
                "slug": "/kqxs/an-giang"
              },
              {
                "name": "Tây Ninh",
                "slug": "/kqxs/tay-ninh"
              },
              {
                "name": "Ninh Thuận",
                "slug": "/kqxs/ninh-thuan"
              },
              {
                "name": "Vĩnh Long",
                "slug": "/kqxs/vinh-long"
              },
              {
                "name": "Bình Dương",
                "slug": "/kqxs/binh-duong"
              },
              {
                "name": "Trà Vinh",
                "slug": "/kqxs/tra-vinh"
              },
              {
                "name": "Long An",
                "slug": "/kqxs/long-an"
              },
              {
                "name": "Hậu Giang",
                "slug": "/kqxs/hau-giang"
              },
              {
                "name": "Bình Phước",
                "slug": "/kqxs/binh-phuoc"
              }
        ]
    },
    // {
    //     name: "Sổ kết quả",
    //     slug: "so-ket-qua",
    //     icon: <FaTable />,
    //     iconChildren: false,
    //     menuChildren: []
    // },
    {
        name: "Thống kê giải đặc biệt",
        slug: "/thong-ke-giai-dac-biet",
        icon: <FaRegChartBar />,
        iconChildren: true,
        menuChildren: [
            {
                name: "Thống kê cho ngày mai",
                slug: "/thong-ke-cho-ngay-mai",
            },
            {
                name: "Thống kê giải ĐB tháng",
                slug: "/thong-ke-giai-db-thang",
            },
            {
                name: "Thống kê giải ĐB theo tuần",
                slug: "/thong-ke-giai-db-theo-tuan",
            },
            {
                name: "2 số cuối giải ĐB theo tháng",
                slug: "/2-so-cuoi-giai-db-theo-thang",
            },
            {
                name: "2 số cuối giải ĐB theo tuần",
                slug: "/2-so-cuoi-giai-db-theo-tuan",
            },
            {
                name: "Thống kê đặc biệt gan",
                slug: "/thong-ke-dac-biet-gan",
            },
            {
                name: "Bảng đặc biệt tuần",
                slug: "/bang-dac-biet-tuan",
            },
            {
                name: "Bảng đặc biệt theo tổng",
                slug: "/bang-dac-biet-theo-tong",
            },
            {
                name: "Thống kê tần suất giải đặc biệt",
                slug: "/thong-ke-tan-suat-giai-dac-biet",
            },
            {
                name: "Tổng hợp chu kỳ đặc biệt",
                slug: "/tong-hop-chu-ky-dat-biet",
            },
            {
                name: "Thống kê theo giải",
                slug: "/thong-ke-theo-giai",
            },
            {
                name: "Thống kê theo cặp số",
                slug: "/thong-ke-theo-cap-so",
            },
            {
                name: "Thống kê dàn đặc biệt",
                slug: "/thong-ke-dan-dac-biet",
            },
            {
                name: "Ghép chọn lô xiên",
                slug: "/ghep-chon-lo-xien",
            },
            {
                name: "Đặc biệt theo thứ",
                slug: "/dac-biet-theo-thu",
            },
        ]
    },
    {
        name: "Soi cầu xổ số miền bắc",
        slug: "/soi-cau-xo-so-mien-bac",
        icon: <FaRegChartBar />,
        iconChildren: true,
        menuChildren: [
            {
                name: "Soi cầu lô tam giác",
                slug: "/soi-cau-lo-tam-giac",
            },
            {
                name: "Soi cầu lô cặp",
                slug: "/soi-cau-lo-cap",
            },
            {
                name: "Soi cầu lô Bạch thủ ghép xuôi",
                slug: "/soi-cau-lo-bach-thu-ghep-xuoi",
            },
            {
                name: "Soi cầu lô bạch thủ ghép ngược",
                slug: "/soi-cau-lo-bach-thu-ghep-nguoc",
            },
            {
                name: "Soi cầu lô hai nháy",
                slug: "/soi-cau-lo-hai-nhay",
            },
            {
                name: "Soi cầu giải đặc biệt",
                slug: "/soi-cau-giai-dac-biet",
            },
            {
                name: "Soi cầu lô trượt",
                slug: "/soi-cau-lo-truot",
            },
            {
                name: "Kiểm tra lịch sử cầu lô",
                slug: "/kiem-tra-lich-su-cau-lo",
            },
        ]
    },
    {
        name: "Thống kê lô miền Bắc",
        slug: "/thong-ke-lo-mien-bac",
        icon: <FaRegChartBar />,
        iconChildren: true,
        menuChildren: [
            {
                name: "Thống kê lotto theo thứ",
                slug: "/thong-ke-lotto-theo-thu",
            },
            {
                name: "Thống kê cặp số anh em",
                slug: "/thong-ke-cap-so-anh-em",
            },
            {
                name: "Chu kỳ lô rơi của hai cặp số",
                slug: "/chu-ky-lo-roi-cua-hai-cap-so",
            },
            {
                name: "Chu kỳ chi tiết dàn lô",
                slug: "/chu-ky-chi-tiet-dan-lo",
            },
            {
                name: "Thống kê lô gan",
                slug: "/thong-ke-lo-gan",
            },
            {
                name: "Thống kê tần số nhịp lô",
                slug: "/thong-ke-tan-so-nhip-lo",
            },
            {
                name: "Thống kê tần suất lotto theo cặp",
                slug: "/thong-ke-tan-suat-lotto-theo-cap",
            },
            {
                name: "Thống kê tần suất lotto kiểu ô",
                slug: "/thong-ke-tan-suat-lotto-kieu-o",
            },
            {
                name: "Thống kê tần suất lotto kiểu lưới",
                slug: "/thong-ke-tan-suat-lotto-kieu-luoi",
            },
            {
                name: "Thống kê đầu đuôi lotto",
                slug: "/thong-ke-dau-duoi-lotto",
            },
        ]
    },
    {
        name: "Giải mã những giấc mơ",
        slug: "/giai-ma-nhung-giac-mo",
        icon: <FaEdit />,
        iconChildren: false,
        menuChildren: []
    },
    {
        name: "Lịch vạn niên",
        slug: "/lich-van-nien",
        icon: <FaEdit />,
        iconChildren: false,
        menuChildren: []
    },
    {
        name: "Tin tức",
        slug: "/tin-tuc",
        icon: <FaEdit />,
        iconChildren: false,
        menuChildren: []
    },
    {
        name: "Liên hệ",
        slug: "/lien-he",
        icon: <FaEdit />,
        iconChildren: false,
        menuChildren: []
    },
    {
        name: "Giới thiệu",
        slug: "/gioi-thieu",
        icon: <FaEdit />,
        iconChildren: false,
        menuChildren: []
    },
    {
        name: "Chính sách bảo mật",
        slug: "/chinh-sach-bao-mat",
        icon: <FaEdit />,
        iconChildren: false,
        menuChildren: []
    },
];