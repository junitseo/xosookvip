import stylesCss from "../../styles/NorthernLotteryStatistics.module.css";

const GridStyleLotoFrequencyStatistics = () => {
    return (
        <div className={stylesCss["page-wrapper"]}>
            <div className={stylesCss["row"]}>
                <div className={stylesCss["col-lg-12"]}>
                    <div className={stylesCss["panel-default"]}>
                        <div className={stylesCss["panel-heading"]}>
                            <h1>Thống kê kết quả theo tần suất loto kiểu ô</h1>
                        </div>
                        <div className={stylesCss["container-bottom"]}>
                            <table cellPadding="5" cellSpacing="5">
                                <tbody>
                                    <tr>
                                        <td align="center">Từ ngày (Ngày/Tháng/Năm):
                                            <input type="text" className={stylesCss["form-control"]} name="day_from" value="20/07/2023" maxLength="10" />
                                        </td>
                                        <td align="center">Đến ngày (Ngày/Tháng/Năm):
                                            <input type="text" className={stylesCss["form-control"]} name="day_to" value="28/10/2023" maxLength="10" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2" align="center" style={{ marginTop: '15px' }}>
                                            <input type="radio" name="kieu_soi" id="kieu_soi_0" value="0" checked="checked" />
                                            <label for="kieu_soi_0">Xem theo chiều dọc</label>
                                            <input type="radio" name="kieu_soi" id="kieu_soi_1" value="1" />
                                            <label for="kieu_soi_1">Xem theo chiều ngang</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" align="center" style={{ marginTop: '15px' }}>
                                            <select name="tp" className={stylesCss["form-control"]}>
                                                <option value="0" selected="selected">Kết quả xổ số toàn Miền Bắc</option>
                                                <option value="1">Kết quả xổ số Thái Bình (Chủ Nhật)</option>
                                                <option value="2">Kết quả xổ số Hà Nội (Thứ Hai,Thứ Năm)</option>
                                                <option value="3">Kết quả xổ số Quảng Ninh (Thứ Ba)</option>
                                                <option value="4">Kết quả xổ số Bắc Ninh (Thứ Tư)</option>
                                                <option value="5">Kết quả xổ số Hải Phòng (Thứ Sáu)</option>
                                                <option value="6">Kết quả xổ số Nam Định (Thứ Bảy)</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" align="center" style={{ marginTop: '15px' }}>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_0">00</label>
                                                <input type="checkbox" name="bs[]" value="0" id="bs_0" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_1">01</label>
                                                <input type="checkbox" name="bs[]" value="1" id="bs_1" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_2">02</label>
                                                <input type="checkbox" name="bs[]" value="2" id="bs_2" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_3">03</label>
                                                <input type="checkbox" name="bs[]" value="3" id="bs_3" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_4">04</label>
                                                <input type="checkbox" name="bs[]" value="4" id="bs_4" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_5">05</label>
                                                <input type="checkbox" name="bs[]" value="5" id="bs_5" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_6">06</label>
                                                <input type="checkbox" name="bs[]" value="6" id="bs_6" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_7">07</label>
                                                <input type="checkbox" name="bs[]" value="7" id="bs_7" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_8">08</label>
                                                <input type="checkbox" name="bs[]" value="8" id="bs_8" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_9">09</label>
                                                <input type="checkbox" name="bs[]" value="9" id="bs_9" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_10">10</label>
                                                <input type="checkbox" name="bs[]" value="10" id="bs_10" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_11">11</label>
                                                <input type="checkbox" name="bs[]" value="11" id="bs_11" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_12">12</label>
                                                <input type="checkbox" name="bs[]" value="12" id="bs_12" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_13">13</label>
                                                <input type="checkbox" name="bs[]" value="13" id="bs_13" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_14">14</label>
                                                <input type="checkbox" name="bs[]" value="14" id="bs_14" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_15">15</label>
                                                <input type="checkbox" name="bs[]" value="15" id="bs_15" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_16">16</label>
                                                <input type="checkbox" name="bs[]" value="16" id="bs_16" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_17">17</label>
                                                <input type="checkbox" name="bs[]" value="17" id="bs_17" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_18">18</label>
                                                <input type="checkbox" name="bs[]" value="18" id="bs_18" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_19">19</label>
                                                <input type="checkbox" name="bs[]" value="19" id="bs_19" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_20">20</label>
                                                <input type="checkbox" name="bs[]" value="20" id="bs_20" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_21">21</label>
                                                <input type="checkbox" name="bs[]" value="21" id="bs_21" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_22">22</label>
                                                <input type="checkbox" name="bs[]" value="22" id="bs_22" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_23">23</label>
                                                <input type="checkbox" name="bs[]" value="23" id="bs_23" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_24">24</label>
                                                <input type="checkbox" name="bs[]" value="24" id="bs_24" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_25">25</label>
                                                <input type="checkbox" name="bs[]" value="25" id="bs_25" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_26">26</label>
                                                <input type="checkbox" name="bs[]" value="26" id="bs_26" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_27">27</label>
                                                <input type="checkbox" name="bs[]" value="27" id="bs_27" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_28">28</label>
                                                <input type="checkbox" name="bs[]" value="28" id="bs_28" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_29">29</label>
                                                <input type="checkbox" name="bs[]" value="29" id="bs_29" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_30">30</label>
                                                <input type="checkbox" name="bs[]" value="30" id="bs_30" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_31">31</label>
                                                <input type="checkbox" name="bs[]" value="31" id="bs_31" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_32">32</label>
                                                <input type="checkbox" name="bs[]" value="32" id="bs_32" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_33">33</label>
                                                <input type="checkbox" name="bs[]" value="33" id="bs_33" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_34">34</label>
                                                <input type="checkbox" name="bs[]" value="34" id="bs_34" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_35">35</label>
                                                <input type="checkbox" name="bs[]" value="35" id="bs_35" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_36">36</label>
                                                <input type="checkbox" name="bs[]" value="36" id="bs_36" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_37">37</label>
                                                <input type="checkbox" name="bs[]" value="37" id="bs_37" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_38">38</label>
                                                <input type="checkbox" name="bs[]" value="38" id="bs_38" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_39">39</label>
                                                <input type="checkbox" name="bs[]" value="39" id="bs_39" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_40">40</label>
                                                <input type="checkbox" name="bs[]" value="40" id="bs_40" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_41">41</label>
                                                <input type="checkbox" name="bs[]" value="41" id="bs_41" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_42">42</label>
                                                <input type="checkbox" name="bs[]" value="42" id="bs_42" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_43">43</label>
                                                <input type="checkbox" name="bs[]" value="43" id="bs_43" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_44">44</label>
                                                <input type="checkbox" name="bs[]" value="44" id="bs_44" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_45">45</label>
                                                <input type="checkbox" name="bs[]" value="45" id="bs_45" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_46">46</label>
                                                <input type="checkbox" name="bs[]" value="46" id="bs_46" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_47">47</label>
                                                <input type="checkbox" name="bs[]" value="47" id="bs_47" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_48">48</label>
                                                <input type="checkbox" name="bs[]" value="48" id="bs_48" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_49">49</label>
                                                <input type="checkbox" name="bs[]" value="49" id="bs_49" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_50">50</label>
                                                <input type="checkbox" name="bs[]" value="50" id="bs_50" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_51">51</label>
                                                <input type="checkbox" name="bs[]" value="51" id="bs_51" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_52">52</label>
                                                <input type="checkbox" name="bs[]" value="52" id="bs_52" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_53">53</label>
                                                <input type="checkbox" name="bs[]" value="53" id="bs_53" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_54">54</label>
                                                <input type="checkbox" name="bs[]" value="54" id="bs_54" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_55">55</label>
                                                <input type="checkbox" name="bs[]" value="55" id="bs_55" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_56">56</label>
                                                <input type="checkbox" name="bs[]" value="56" id="bs_56" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_57">57</label>
                                                <input type="checkbox" name="bs[]" value="57" id="bs_57" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_58">58</label>
                                                <input type="checkbox" name="bs[]" value="58" id="bs_58" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_59">59</label>
                                                <input type="checkbox" name="bs[]" value="59" id="bs_59" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_60">60</label>
                                                <input type="checkbox" name="bs[]" value="60" id="bs_60" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_61">61</label>
                                                <input type="checkbox" name="bs[]" value="61" id="bs_61" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_62">62</label>
                                                <input type="checkbox" name="bs[]" value="62" id="bs_62" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_63">63</label>
                                                <input type="checkbox" name="bs[]" value="63" id="bs_63" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_64">64</label>
                                                <input type="checkbox" name="bs[]" value="64" id="bs_64" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_65">65</label>
                                                <input type="checkbox" name="bs[]" value="65" id="bs_65" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_66">66</label>
                                                <input type="checkbox" name="bs[]" value="66" id="bs_66" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_67">67</label>
                                                <input type="checkbox" name="bs[]" value="67" id="bs_67" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_68">68</label>
                                                <input type="checkbox" name="bs[]" value="68" id="bs_68" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_69">69</label>
                                                <input type="checkbox" name="bs[]" value="69" id="bs_69" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_70">70</label>
                                                <input type="checkbox" name="bs[]" value="70" id="bs_70" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_71">71</label>
                                                <input type="checkbox" name="bs[]" value="71" id="bs_71" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_72">72</label>
                                                <input type="checkbox" name="bs[]" value="72" id="bs_72" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_73">73</label>
                                                <input type="checkbox" name="bs[]" value="73" id="bs_73" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_74">74</label>
                                                <input type="checkbox" name="bs[]" value="74" id="bs_74" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_75">75</label>
                                                <input type="checkbox" name="bs[]" value="75" id="bs_75" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_76">76</label>
                                                <input type="checkbox" name="bs[]" value="76" id="bs_76" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_77">77</label>
                                                <input type="checkbox" name="bs[]" value="77" id="bs_77" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_78">78</label>
                                                <input type="checkbox" name="bs[]" value="78" id="bs_78" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_79">79</label>
                                                <input type="checkbox" name="bs[]" value="79" id="bs_79" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_80">80</label>
                                                <input type="checkbox" name="bs[]" value="80" id="bs_80" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_81">81</label>
                                                <input type="checkbox" name="bs[]" value="81" id="bs_81" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_82">82</label>
                                                <input type="checkbox" name="bs[]" value="82" id="bs_82" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_83">83</label>
                                                <input type="checkbox" name="bs[]" value="83" id="bs_83" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_84">84</label>
                                                <input type="checkbox" name="bs[]" value="84" id="bs_84" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_85">85</label>
                                                <input type="checkbox" name="bs[]" value="85" id="bs_85" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_86">86</label>
                                                <input type="checkbox" name="bs[]" value="86" id="bs_86" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_87">87</label>
                                                <input type="checkbox" name="bs[]" value="87" id="bs_87" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_88">88</label>
                                                <input type="checkbox" name="bs[]" value="88" id="bs_88" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_89">89</label>
                                                <input type="checkbox" name="bs[]" value="89" id="bs_89" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_90">90</label>
                                                <input type="checkbox" name="bs[]" value="90" id="bs_90" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_91">91</label>
                                                <input type="checkbox" name="bs[]" value="91" id="bs_91" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_92">92</label>
                                                <input type="checkbox" name="bs[]" value="92" id="bs_92" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_93">93</label>
                                                <input type="checkbox" name="bs[]" value="93" id="bs_93" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_94">94</label>
                                                <input type="checkbox" name="bs[]" value="94" id="bs_94" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_95">95</label>
                                                <input type="checkbox" name="bs[]" value="95" id="bs_95" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_96">96</label>
                                                <input type="checkbox" name="bs[]" value="96" id="bs_96" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_97">97</label>
                                                <input type="checkbox" name="bs[]" value="97" id="bs_97" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_98">98</label>
                                                <input type="checkbox" name="bs[]" value="98" id="bs_98" class="bs" checked="checked" />
                                            </div>
                                            <div className={stylesCss["data-item-number"]}>
                                                <label for="bs_99">99</label>
                                                <input type="checkbox" name="bs[]" value="99" id="bs_99" class="bs" checked="checked" />
                                            </div>
                                            <div class="clb"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" align="center" className={stylesCss["data-item-link"]}>
                                            <a href="javascript:void(0);" onclick="cham_capso(0);" className={stylesCss["data-item-href"]}>Chạm 0</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(1);" className={stylesCss["data-item-href"]}>Chạm 1</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(2);" className={stylesCss["data-item-href"]}>Chạm 2</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(3);" className={stylesCss["data-item-href"]}>Chạm 3</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(4);" className={stylesCss["data-item-href"]}>Chạm 4</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(5);" className={stylesCss["data-item-href"]}>Chạm 5</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(6);" className={stylesCss["data-item-href"]}>Chạm 6</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(7);" className={stylesCss["data-item-href"]}>Chạm 7</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(8);" className={stylesCss["data-item-href"]}>Chạm 8</a>
                                            <a href="javascript:void(0);" onclick="cham_capso(9);" className={stylesCss["data-item-href"]}>Chạm 9</a>
                                            <a href="javascript:void(0);" onclick="sochan_capso();" className={stylesCss["data-item-href"]}>Số chẵn</a>
                                            <a href="javascript:void(0);" onclick="sole_capso();" className={stylesCss["data-item-href"]}>Số lẻ</a>
                                            <a href="javascript:void(0);" onclick="all_capso();" className={stylesCss["data-item-href"]}>Chọn tất cả</a>
                                            <a href="javascript:void(0);" onclick="del_capso();" className={stylesCss["data-item-href"]}>Xóa tất cả</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" align="center">
                                            <input type="submit" name="sbtsubmit" value="Xem kết quả" className={stylesCss["btn-btn-default"]} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={stylesCss["container-table-total"]}>
                            <table cellPadding="5" cellSpacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table cellPadding="0" cellSpacing="0" border="1" className={stylesCss["table-content"]} width="100%">
                                                <tbody>
                                                    <tr>
                                                        <th className={stylesCss["table-content-title"]}>Cặp số</th>
                                                        <th className={stylesCss["table-content-title-time"]}>Lần về</th>
                                                        <th className={stylesCss["content-number-item"]}>Lưới tần suất từ ngày <font color="red">28/09/2023</font> đến ngày <font color="red">28/10/2023</font>
                                                        </th>
                                                    </tr>
                                                    <tr id="tr_0">
                                                        <td className={stylesCss["content-number-item"]} align="center">00</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a>
                                                            - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a>
                                                            - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a>
                                                            - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a>
                                                            - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a>
                                                            - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a>
                                                            - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a>
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a>
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a>
                                                            - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_1" >
                                                        <td className={stylesCss["content-number-item"]} align="center">01</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">3</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_2" >
                                                        <td className={stylesCss["content-number-item"]} align="center">02</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_3" >
                                                        <td className={stylesCss["content-number-item"]} align="center">03</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_4" >
                                                        <td className={stylesCss["content-number-item"]} align="center">04</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_5" >
                                                        <td className={stylesCss["content-number-item"]} align="center">05</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_6" >
                                                        <td className={stylesCss["content-number-item"]} align="center">06</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_7" >
                                                        <td className={stylesCss["content-number-item"]} align="center">07</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_8" >
                                                        <td className={stylesCss["content-number-item"]} align="center">08</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">11</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_9" >
                                                        <td className={stylesCss["content-number-item"]} align="center">09</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_10" >
                                                        <td className={stylesCss["content-number-item"]} align="center">10</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_11" >
                                                        <td className={stylesCss["content-number-item"]} align="center">11</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_12" >
                                                        <td className={stylesCss["content-number-item"]} align="center">12</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">4</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_13" >
                                                        <td className={stylesCss["content-number-item"]} align="center">13</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_14" >
                                                        <td className={stylesCss["content-number-item"]} align="center">14</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_15" >
                                                        <td className={stylesCss["content-number-item"]} align="center">15</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_16" >
                                                        <td className={stylesCss["content-number-item"]} align="center">16</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_17" >
                                                        <td className={stylesCss["content-number-item"]} align="center">17</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_18" >
                                                        <td className={stylesCss["content-number-item"]} align="center">18</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_19" >
                                                        <td className={stylesCss["content-number-item"]} align="center">19</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">11</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_20" >
                                                        <td className={stylesCss["content-number-item"]} align="center">20</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_21" >
                                                        <td className={stylesCss["content-number-item"]} align="center">21</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_22" >
                                                        <td className={stylesCss["content-number-item"]} align="center">22</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_23" >
                                                        <td className={stylesCss["content-number-item"]} align="center">23</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_24" >
                                                        <td className={stylesCss["content-number-item"]} align="center">24</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_25" >
                                                        <td className={stylesCss["content-number-item"]} align="center">25</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_26" >
                                                        <td className={stylesCss["content-number-item"]} align="center">26</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_27" >
                                                        <td className={stylesCss["content-number-item"]} align="center">27</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_28" >
                                                        <td className={stylesCss["content-number-item"]} align="center">28</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_29" >
                                                        <td className={stylesCss["content-number-item"]} align="center">29</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">14</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_30" >
                                                        <td className={stylesCss["content-number-item"]} align="center">30</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_31" >
                                                        <td className={stylesCss["content-number-item"]} align="center">31</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_32" >
                                                        <td className={stylesCss["content-number-item"]} align="center">32</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_33" >
                                                        <td className={stylesCss["content-number-item"]} align="center">33</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_34" >
                                                        <td className={stylesCss["content-number-item"]} align="center">34</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">2</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_35" >
                                                        <td className={stylesCss["content-number-item"]} align="center">35</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_36" >
                                                        <td className={stylesCss["content-number-item"]} align="center">36</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_37" >
                                                        <td className={stylesCss["content-number-item"]} align="center">37</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_38" >
                                                        <td className={stylesCss["content-number-item"]} align="center">38</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_39" >
                                                        <td className={stylesCss["content-number-item"]} align="center">39</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_40" >
                                                        <td className={stylesCss["content-number-item"]} align="center">40</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_41" >
                                                        <td className={stylesCss["content-number-item"]} align="center">41</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_42" >
                                                        <td className={stylesCss["content-number-item"]} align="center">42</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_43" >
                                                        <td className={stylesCss["content-number-item"]} align="center">43</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_44" >
                                                        <td className={stylesCss["content-number-item"]} align="center">44</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">13</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_45" >
                                                        <td className={stylesCss["content-number-item"]} align="center">45</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">4</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_46" >
                                                        <td className={stylesCss["content-number-item"]} align="center">46</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_47" >
                                                        <td className={stylesCss["content-number-item"]} align="center">47</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_48" >
                                                        <td className={stylesCss["content-number-item"]} align="center">48</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">4</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_49" >
                                                        <td className={stylesCss["content-number-item"]} align="center">49</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">13</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_50" >
                                                        <td className={stylesCss["content-number-item"]} align="center">50</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_51" >
                                                        <td className={stylesCss["content-number-item"]} align="center">51</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_52" >
                                                        <td className={stylesCss["content-number-item"]} align="center">52</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_53" >
                                                        <td className={stylesCss["content-number-item"]} align="center">53</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_54" >
                                                        <td className={stylesCss["content-number-item"]} align="center">54</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_55" >
                                                        <td className={stylesCss["content-number-item"]} align="center">55</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">11</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_56" >
                                                        <td className={stylesCss["content-number-item"]} align="center">56</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">14</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_57" >
                                                        <td className={stylesCss["content-number-item"]} align="center">57</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_58" >
                                                        <td className={stylesCss["content-number-item"]} align="center">58</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">2</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_59" >
                                                        <td className={stylesCss["content-number-item"]} align="center">59</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_60" >
                                                        <td className={stylesCss["content-number-item"]} align="center">60</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_61" >
                                                        <td className={stylesCss["content-number-item"]} align="center">61</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">3</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_62" >
                                                        <td className={stylesCss["content-number-item"]} align="center">62</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_63" >
                                                        <td className={stylesCss["content-number-item"]} align="center">63</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_64" >
                                                        <td className={stylesCss["content-number-item"]} align="center">64</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_65" >
                                                        <td className={stylesCss["content-number-item"]} align="center">65</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">11</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_66" >
                                                        <td className={stylesCss["content-number-item"]} align="center">66</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_67" >
                                                        <td className={stylesCss["content-number-item"]} align="center">67</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_68" >
                                                        <td className={stylesCss["content-number-item"]} align="center">68</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">8</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_69" >
                                                        <td className={stylesCss["content-number-item"]} align="center">69</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_70" >
                                                        <td className={stylesCss["content-number-item"]} align="center">70</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_71" >
                                                        <td className={stylesCss["content-number-item"]} align="center">71</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_72" >
                                                        <td className={stylesCss["content-number-item"]} align="center">72</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_73" >
                                                        <td className={stylesCss["content-number-item"]} align="center">73</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">15</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_74" >
                                                        <td className={stylesCss["content-number-item"]} align="center">74</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_75" >
                                                        <td className={stylesCss["content-number-item"]} align="center">75</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_76" >
                                                        <td className={stylesCss["content-number-item"]} align="center">76</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">13</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_77" >
                                                        <td className={stylesCss["content-number-item"]} align="center">77</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_78" >
                                                        <td className={stylesCss["content-number-item"]} align="center">78</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">4</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_79" >
                                                        <td className={stylesCss["content-number-item"]} align="center">79</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">17</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=30-09-2023&amp;date_end=30-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_80" >
                                                        <td className={stylesCss["content-number-item"]} align="center">80</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_81" >
                                                        <td className={stylesCss["content-number-item"]} align="center">81</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_82" >
                                                        <td className={stylesCss["content-number-item"]} align="center">82</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">11</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_83" >
                                                        <td className={stylesCss["content-number-item"]} align="center">83</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">10</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_84" >
                                                        <td className={stylesCss["content-number-item"]} align="center">84</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_85" >
                                                        <td className={stylesCss["content-number-item"]} align="center">85</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">4</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_86" >
                                                        <td className={stylesCss["content-number-item"]} align="center">86</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_87" >
                                                        <td className={stylesCss["content-number-item"]} align="center">87</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=14-10-2023&amp;date_end=14-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=07-10-2023&amp;date_end=07-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_88" >
                                                        <td className={stylesCss["content-number-item"]} align="center">88</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">12</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_89" >
                                                        <td className={stylesCss["content-number-item"]} align="center">89</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">7</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=20-10-2023&amp;date_end=20-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_90" >
                                                        <td className={stylesCss["content-number-item"]} align="center">90</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_91" >
                                                        <td className={stylesCss["content-number-item"]} align="center">91</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=23-10-2023&amp;date_end=23-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_92" >
                                                        <td className={stylesCss["content-number-item"]} align="center">92</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=09-10-2023&amp;date_end=09-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_93" >
                                                        <td className={stylesCss["content-number-item"]} align="center">93</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">14</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=25-10-2023&amp;date_end=25-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=05-10-2023&amp;date_end=05-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_94" >
                                                        <td className={stylesCss["content-number-item"]} align="center">94</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=21-10-2023&amp;date_end=21-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=04-10-2023&amp;date_end=04-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=01-10-2023&amp;date_end=01-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_95" >
                                                        <td className={stylesCss["content-number-item"]} align="center">95</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=26-10-2023&amp;date_end=26-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=17-10-2023&amp;date_end=17-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=06-10-2023&amp;date_end=06-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_96" >
                                                        <td className={stylesCss["content-number-item"]} align="center">96</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">6</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=22-10-2023&amp;date_end=22-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=16-10-2023&amp;date_end=16-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=11-10-2023&amp;date_end=11-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=08-10-2023&amp;date_end=08-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_97" >
                                                        <td className={stylesCss["content-number-item"]} align="center">97</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">4</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=13-10-2023&amp;date_end=13-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=29-09-2023&amp;date_end=29-09-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_98" >
                                                        <td className={stylesCss["content-number-item"]} align="center">98</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">9</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt;
                                                            <a href="so-ket-qua.html?menu_id=7&amp;date_start=28-10-2023&amp;date_end=28-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>3</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=27-10-2023&amp;date_end=27-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=24-10-2023&amp;date_end=24-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=18-10-2023&amp;date_end=18-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=12-10-2023&amp;date_end=12-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - <a href="so-ket-qua.html?menu_id=7&amp;date_start=10-10-2023&amp;date_end=10-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - &lt;
                                                        </td>
                                                    </tr>
                                                    <tr id="tr_99" >
                                                        <td className={stylesCss["content-number-item"]} align="center">99</td>
                                                        <td className={stylesCss["content-number-item-red"]} align="center">5</td>
                                                        <td align="left" title="29-09-2023" valign="middle" className={stylesCss["content-number-item-item"]}>
                                                            &lt; - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=19-10-2023&amp;date_end=19-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=15-10-2023&amp;date_end=15-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> - - - - - - - - - - - <a href="so-ket-qua.html?menu_id=7&amp;date_start=03-10-2023&amp;date_end=03-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>1</a> <a href="so-ket-qua.html?menu_id=7&amp;date_start=02-10-2023&amp;date_end=02-10-2023" target="_blank" className={stylesCss["content-number-bold"]}>2</a> - - - &lt;
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default GridStyleLotoFrequencyStatistics;