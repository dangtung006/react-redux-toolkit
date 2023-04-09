import React from 'react';
import "./header.css"

function header1(props) {
    return (
        <nav>
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/">Sản phẩm</a>
                    <ul>
                        <li><a href="/">Sản phẩm 1</a></li>
                        <li><a href="/">Sản phẩm 2</a></li>
                        <li><a href="/">Sản phẩm 3</a></li>
                    </ul>
                </li>
                <li><a href="/">Dịch vụ</a></li>
                <li><a href="/">Giới thiệu</a></li>
                <li><a href="/">Liên hệ</a></li>
            </ul>
        </nav>
    );
}

export default header1;