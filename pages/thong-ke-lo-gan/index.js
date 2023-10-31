import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";
import Meta from "app/components/Meta"

const LotteryStatistics = () => {
    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Thống kê lô gan" />
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê những cặp số nào ra nhiều nhất sau các cặp số vừa mới ra</h1>
                        </div>
                        <div className={stylesCss["panel-body"]}>
                            <div className={stylesCss["dataTable-wrapper"]}>
                                <div className={stylesCss["form-group-form-inline"]}>
                                    <table cellPadding="5" cellSpacing="0" width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="100" align="right">Từ ngày: </td>
                                                <td width="180">Ngày/Tháng/Năm
                                                    <br></br>
                                                    <input className={stylesCss["form-control"]} type="text" name="date_start" value="01/01/2020" />
                                                </td>
                                                <td width="100" align="right">Đến ngày: </td>
                                                <td width="180">Ngày/Tháng/Năm
                                                    <br></br>
                                                    <input type="text" className={stylesCss["form-control"]} name="date_end" value="28/10/2023" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="4" align="center">
                                                    nhập số ngày
                                                    <input type="text" name="biendo" value="10" className={stylesCss["form-control"]} />
                                                    <input type="submit" name="sbtFind" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellPadding="5" cellSpacing="5">
                                <tbody>
                                    <tr>
                                        <td>
                                            Các cặp số đuôi chưa ra theo biên độ 10 ngày trở lên:
                                            <br></br> Cặp số <font color="red"><b></b></font> ra ngày: <font color="blue">05/06/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>145</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>01</b></font> ra ngày: <font color="blue">11/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>17</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>31</b></font> ra ngày: <font color="blue">16/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>12</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>34</b></font> ra ngày: <font color="blue">14/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>14</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>39</b></font> ra ngày: <font color="blue">18/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>10</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>64</b></font> ra ngày: <font color="blue">17/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>11</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>66</b></font> ra ngày: <font color="blue">12/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>16</b></font> ngày
                                            <br></br> Cặp số <font color="red"><b>78</b></font> ra ngày: <font color="blue">18/10/2023</font> - đến 28/10/2023 vẫn chưa ra là <font color="red"><b>10</b></font> ngày
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellPadding="2" cellSpacing="5" width="100%" border="1" className={stylesCss["table-content"]} >
                                <tbody>
                                    <tr className={stylesCss["table-content-item"]}>
                                        <th align="center" className={stylesCss["table-item"]}>Cặp số</th>
                                        <th align="center" className={stylesCss["table-item"]}>00</th>
                                        <th align="center" className={stylesCss["table-item"]}>01</th>
                                        <th align="center" className={stylesCss["table-item"]}>02</th>
                                        <th align="center" className={stylesCss["table-item"]}>03</th>
                                        <th align="center" className={stylesCss["table-item"]}>04</th>
                                        <th align="center" className={stylesCss["table-item"]}>05</th>
                                        <th align="center" className={stylesCss["table-item"]}>06</th>
                                        <th align="center" className={stylesCss["table-item"]}>07</th>
                                        <th align="center" className={stylesCss["table-item"]}>08</th>
                                        <th align="center" className={stylesCss["table-item"]}>09</th>
                                        <th align="center" className={stylesCss["table-item"]}>10</th>
                                        <th align="center" className={stylesCss["table-item"]}>11</th>
                                        <th align="center" className={stylesCss["table-item"]}>12</th>
                                        <th align="center" className={stylesCss["table-item"]}>13</th>
                                        <th align="center" className={stylesCss["table-item"]}>14</th>
                                        <th align="center" className={stylesCss["table-item"]}>15</th>
                                        <th align="center" className={stylesCss["table-item"]}>16</th>
                                        <th align="center" className={stylesCss["table-item"]}>17</th>
                                        <th align="center" className={stylesCss["table-item"]}>18</th>
                                        <th align="center" className={stylesCss["table-item"]}>19</th>
                                    </tr>
                                    <tr>
                                        <td align="center" className={stylesCss["max-date"]}>Số ngày gan cực đại</td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            32
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            17
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            19
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            17
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            34
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="21">&nbsp;</td>
                                    </tr>
                                    <tr className={stylesCss["max-date"]}>
                                        <th align="center" className={stylesCss["table-item"]}>Cặp số</th>
                                        <th align="center" className={stylesCss["table-item"]}>20</th>
                                        <th align="center" className={stylesCss["table-item"]}>21</th>
                                        <th align="center" className={stylesCss["table-item"]}>22</th>
                                        <th align="center" className={stylesCss["table-item"]}>23</th>
                                        <th align="center" className={stylesCss["table-item"]}>24</th>
                                        <th align="center" className={stylesCss["table-item"]}>25</th>
                                        <th align="center" className={stylesCss["table-item"]}>26</th>
                                        <th align="center" className={stylesCss["table-item"]}>27</th>
                                        <th align="center" className={stylesCss["table-item"]}>28</th>
                                        <th align="center" className={stylesCss["table-item"]}>29</th>
                                        <th align="center" className={stylesCss["table-item"]}>30</th>
                                        <th align="center" className={stylesCss["table-item"]}>31</th>
                                        <th align="center" className={stylesCss["table-item"]}>32</th>
                                        <th align="center" className={stylesCss["table-item"]}>33</th>
                                        <th align="center" className={stylesCss["table-item"]}>34</th>
                                        <th align="center" className={stylesCss["table-item"]}>35</th>
                                        <th align="center" className={stylesCss["table-item"]}>36</th>
                                        <th align="center" className={stylesCss["table-item"]}>37</th>
                                        <th align="center" className={stylesCss["table-item"]}>38</th>
                                        <th align="center" className={stylesCss["table-item"]}>39</th>
                                    </tr>
                                    <tr>
                                        <td align="center" className={stylesCss["max-date"]}>Số ngày gan cực đại</td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            26
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            32
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            27
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            27
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            26
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            18
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            26
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="21">&nbsp;</td>
                                    </tr>
                                    <tr className={stylesCss["max-date"]}>
                                        <th align="center" className={stylesCss["table-item"]}>Cặp số</th>
                                        <th align="center" className={stylesCss["table-item"]}>40</th>
                                        <th align="center" className={stylesCss["table-item"]}>41</th>
                                        <th align="center" className={stylesCss["table-item"]}>42</th>
                                        <th align="center" className={stylesCss["table-item"]}>43</th>
                                        <th align="center" className={stylesCss["table-item"]}>44</th>
                                        <th align="center" className={stylesCss["table-item"]}>45</th>
                                        <th align="center" className={stylesCss["table-item"]}>46</th>
                                        <th align="center" className={stylesCss["table-item"]}>47</th>
                                        <th align="center" className={stylesCss["table-item"]}>48</th>
                                        <th align="center" className={stylesCss["table-item"]}>49</th>
                                        <th align="center" className={stylesCss["table-item"]}>50</th>
                                        <th align="center" className={stylesCss["table-item"]}>51</th>
                                        <th align="center" className={stylesCss["table-item"]}>52</th>
                                        <th align="center" className={stylesCss["table-item"]}>53</th>
                                        <th align="center" className={stylesCss["table-item"]}>54</th>
                                        <th align="center" className={stylesCss["table-item"]}>55</th>
                                        <th align="center" className={stylesCss["table-item"]}>56</th>
                                        <th align="center" className={stylesCss["table-item"]}>57</th>
                                        <th align="center" className={stylesCss["table-item"]}>58</th>
                                        <th align="center" className={stylesCss["table-item"]}>59</th>
                                    </tr>
                                    <tr>
                                        <td align="center" className={stylesCss["max-date"]}>Số ngày gan cực đại</td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            19
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            31
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            31
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            26
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            43
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            29
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="21">&nbsp;</td>
                                    </tr>
                                    <tr className={stylesCss["max-date"]}>
                                        <th align="center" className={stylesCss["table-item"]}>Cặp số</th>
                                        <th align="center" className={stylesCss["table-item"]}>60</th>
                                        <th align="center" className={stylesCss["table-item"]}>61</th>
                                        <th align="center" className={stylesCss["table-item"]}>62</th>
                                        <th align="center" className={stylesCss["table-item"]}>63</th>
                                        <th align="center" className={stylesCss["table-item"]}>64</th>
                                        <th align="center" className={stylesCss["table-item"]}>65</th>
                                        <th align="center" className={stylesCss["table-item"]}>66</th>
                                        <th align="center" className={stylesCss["table-item"]}>67</th>
                                        <th align="center" className={stylesCss["table-item"]}>68</th>
                                        <th align="center" className={stylesCss["table-item"]}>69</th>
                                        <th align="center" className={stylesCss["table-item"]}>70</th>
                                        <th align="center" className={stylesCss["table-item"]}>71</th>
                                        <th align="center" className={stylesCss["table-item"]}>72</th>
                                        <th align="center" className={stylesCss["table-item"]}>73</th>
                                        <th align="center" className={stylesCss["table-item"]}>74</th>
                                        <th align="center" className={stylesCss["table-item"]}>75</th>
                                        <th align="center" className={stylesCss["table-item"]}>76</th>
                                        <th align="center" className={stylesCss["table-item"]}>77</th>
                                        <th align="center" className={stylesCss["table-item"]}>78</th>
                                        <th align="center" className={stylesCss["table-item"]}>79</th>
                                    </tr>
                                    <tr>
                                        <td align="center" className={stylesCss["max-date"]}>Số ngày gan cực đại</td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            31
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            19
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            23
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            19
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            26
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            27
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            37
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            25
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            26
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            34
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            21
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="21">&nbsp;</td>
                                    </tr>
                                    <tr className={stylesCss["max-date"]}>
                                        <th align="center" className={stylesCss["table-item"]}>Cặp số</th>
                                        <th align="center" className={stylesCss["table-item"]}>80</th>
                                        <th align="center" className={stylesCss["table-item"]}>81</th>
                                        <th align="center" className={stylesCss["table-item"]}>82</th>
                                        <th align="center" className={stylesCss["table-item"]}>83</th>
                                        <th align="center" className={stylesCss["table-item"]}>84</th>
                                        <th align="center" className={stylesCss["table-item"]}>85</th>
                                        <th align="center" className={stylesCss["table-item"]}>86</th>
                                        <th align="center" className={stylesCss["table-item"]}>87</th>
                                        <th align="center" className={stylesCss["table-item"]}>88</th>
                                        <th align="center" className={stylesCss["table-item"]}>89</th>
                                        <th align="center" className={stylesCss["table-item"]}>90</th>
                                        <th align="center" className={stylesCss["table-item"]}>91</th>
                                        <th align="center" className={stylesCss["table-item"]}>92</th>
                                        <th align="center" className={stylesCss["table-item"]}>93</th>
                                        <th align="center" className={stylesCss["table-item"]}>94</th>
                                        <th align="center" className={stylesCss["table-item"]}>95</th>
                                        <th align="center" className={stylesCss["table-item"]}>96</th>
                                        <th align="center" className={stylesCss["table-item"]}>97</th>
                                        <th align="center" className={stylesCss["table-item"]}>98</th>
                                        <th align="center" className={stylesCss["table-item"]}>99</th>
                                    </tr>
                                    <tr>
                                        <td align="center" className={stylesCss["max-date"]}>Số ngày gan cực đại</td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            41
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            27
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            33
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            28
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            18
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            22
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            24
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            29
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            29
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            20
                                        </td>
                                        <td align="center" valign="middle" className={stylesCss["max-date-item"]}>
                                            27
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LotteryStatistics;