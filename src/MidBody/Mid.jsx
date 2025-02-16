import React, { useState } from "react";
import "./Mid.css";

const dataAnime = [
  {
    id: "1",
    movieName: "Weather With You",
    description:
      "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
    image:
      "https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ll0oOsAmNIWaarrn9QLJYtNzfwp9pTX-jH6F1rZdEyYDHnzQnWURRLBk4C4FcXD3mJlsPEfMetBL92sWbBqLZ0hJkkIWLu~GDxOflXMWOIOoa-QOMgdDSSlBYQA5keBAK8arjmf5UpTLLn6FJfXc7-SQXmyHSdg4yoX8GzpO8oYTZuQhCwLcY-XE91u3sCilJJ1wQF0XWRdevi3dpDpRXTa-qXjg9BFxCKQQ0qhPM-pmuLq4u5~WaMgBrJOh7G0spIT~QDBfbTI5Gcpr6anVfZjMcpCh46HkZSMGGfRrDpwQAEbKcd2dxw5IBQKW2WsuK~HJgc2vr~-4MwtmgTRK2w__",
    episode: "01",
  },
  {
    id: "2",
    movieName: "Once Peace",
    description:
      "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
    image:
      "https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dCI1U9tUfHF8xusdq79X0p0Vw94gNrjj7T8Nae0KbRgYzk--4NhJ5jH9lcz8oSNoKOEjgGSchgkNXJUfsC8-XcqN6XoGIXcn4daGA9ydvGFwkVZX2fOcYtHmASQiPryrHLRVWdiD6vPQs1D9JIh~nstHas0Iz~-RNXV8bVTonu5~Kok286EiCXeC4Rmb4TjMsmNanuzKQfQARCcjtFmWnnMIReuFziuan-fgrMs4CGYv1Ba3WGUw7LAVaXZn29TbzTlW-hro2xy6YZgHEevDJ9FFTxTC1Y4ggthZnup8h8~SWEAbskWdh4TjfXvttuxP2IzgZdVr9Vnsf09ZiRvDcg__",
    episode: "1018",
  },
  {
    id: "3",
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
    image:
      "https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z29zNIo-kq~5LzFzzshk73tk10PQVFdUbAkv2wfjEp5fKJXi23v7lAWwF4CpVgXaHs49b03ZvSzmv4HRXhq6t3ohfOjAjUQfdsiftaVbLcFdhEwue8p9~W8DUU3MDvwoudQVxtUCYE5S~CDfCh~1G8YLB8axUxy2lPwh6WWshC9eLPYu44MwKQpXNGRoY0liJ3ho48M4dq9hMFL0ykXfs0D6gjNV0mrXlqy1WAR92fv9YyX5-fU9oqBV4weIyhi8QtX2es7gFzFSlsS4-ehqDliqlFDpd2s1X1QnGvvWuM0kmb6Eo0tQBaU9g8sxKFasj7j8aTQTGi3UhW5lOeET6Q__",
    episode: "250",
  },
  {
    id: "4",
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
    image:
      "https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kgf9Iyu5Wv8HcCXUQ388BaRF-apbq3d1v~4V~hlWGOFeUT9brfGC8olOVkiyi0NwNHYcLj~toc8wbmahif0j6168VE6-1SHLNbvlLqKrjLH~qmwlJZDlDL3vjsoe3ztwTj6xXeU8Xy7Rj4OjCATIWi-qwhfZvu6bU2p4uBDZ0bjQ0PT21BVGGIGxr7W7-4spcGV9se3I4N8ptM5qfDpUOBivvCWAbAFqgJasPED46DkC84VA7~ZRVmkj8AVf41qCY4v7hPdTBf8aSFAiO5oa1umc5ufqneWX7wqaybpDKx87X62Zw5Jmc1s-ZAPw7g438nq3eA4Lu7R9ANC-FRg6vg__",
    episode: "250",
  },
  {
    id: "5",
    movieName: "Spy X Family",
    description:
      "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
    image: "https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gHDLHSeXbaC2HhxU50jUgd79o74UHTo7oi0jdznW09YQXM7fq3~2sZsHDOz2PlTJ09dtQxQhNRLoS6pwN55Xw~rdCtooG9hNs3UTssMoBmr2OJqWNSreLE83nHwYJlbPTOT0nSrDKvopyd2bwS7gzlkw7mTGCsbA5PVE8nNAkgwsvjEymUrLuCw3E1KG4yQKkeSaNvDAtOizZOZWwJw5uUyA-aJU1pDXKnm1XU7nisiIp7asUFaYiqvMdSM5HAdwK02e30NzGxKtiCDl5GVdryV-Qib2ahxBHv3L17B73636CaROeekJwPcSpOnm9gBAlf0t747jk4HbMKCKqSHchw__",
    episode: "07",
  },
  {
    
  }
];
const Mid = () => {
  // Danh sách ảnh trong hàng 3
  const images = [
    "https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ll0oOsAmNIWaarrn9QLJYtNzfwp9pTX-jH6F1rZdEyYDHnzQnWURRLBk4C4FcXD3mJlsPEfMetBL92sWbBqLZ0hJkkIWLu~GDxOflXMWOIOoa-QOMgdDSSlBYQA5keBAK8arjmf5UpTLLn6FJfXc7-SQXmyHSdg4yoX8GzpO8oYTZuQhCwLcY-XE91u3sCilJJ1wQF0XWRdevi3dpDpRXTa-qXjg9BFxCKQQ0qhPM-pmuLq4u5~WaMgBrJOh7G0spIT~QDBfbTI5Gcpr6anVfZjMcpCh46HkZSMGGfRrDpwQAEbKcd2dxw5IBQKW2WsuK~HJgc2vr~-4MwtmgTRK2w__",
    "https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dCI1U9tUfHF8xusdq79X0p0Vw94gNrjj7T8Nae0KbRgYzk--4NhJ5jH9lcz8oSNoKOEjgGSchgkNXJUfsC8-XcqN6XoGIXcn4daGA9ydvGFwkVZX2fOcYtHmASQiPryrHLRVWdiD6vPQs1D9JIh~nstHas0Iz~-RNXV8bVTonu5~Kok286EiCXeC4Rmb4TjMsmNanuzKQfQARCcjtFmWnnMIReuFziuan-fgrMs4CGYv1Ba3WGUw7LAVaXZn29TbzTlW-hro2xy6YZgHEevDJ9FFTxTC1Y4ggthZnup8h8~SWEAbskWdh4TjfXvttuxP2IzgZdVr9Vnsf09ZiRvDcg__",
    "https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z29zNIo-kq~5LzFzzshk73tk10PQVFdUbAkv2wfjEp5fKJXi23v7lAWwF4CpVgXaHs49b03ZvSzmv4HRXhq6t3ohfOjAjUQfdsiftaVbLcFdhEwue8p9~W8DUU3MDvwoudQVxtUCYE5S~CDfCh~1G8YLB8axUxy2lPwh6WWshC9eLPYu44MwKQpXNGRoY0liJ3ho48M4dq9hMFL0ykXfs0D6gjNV0mrXlqy1WAR92fv9YyX5-fU9oqBV4weIyhi8QtX2es7gFzFSlsS4-ehqDliqlFDpd2s1X1QnGvvWuM0kmb6Eo0tQBaU9g8sxKFasj7j8aTQTGi3UhW5lOeET6Q__",
    "https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kgf9Iyu5Wv8HcCXUQ388BaRF-apbq3d1v~4V~hlWGOFeUT9brfGC8olOVkiyi0NwNHYcLj~toc8wbmahif0j6168VE6-1SHLNbvlLqKrjLH~qmwlJZDlDL3vjsoe3ztwTj6xXeU8Xy7Rj4OjCATIWi-qwhfZvu6bU2p4uBDZ0bjQ0PT21BVGGIGxr7W7-4spcGV9se3I4N8ptM5qfDpUOBivvCWAbAFqgJasPED46DkC84VA7~ZRVmkj8AVf41qCY4v7hPdTBf8aSFAiO5oa1umc5ufqneWX7wqaybpDKx87X62Zw5Jmc1s-ZAPw7g438nq3eA4Lu7R9ANC-FRg6vg__",
    "https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gHDLHSeXbaC2HhxU50jUgd79o74UHTo7oi0jdznW09YQXM7fq3~2sZsHDOz2PlTJ09dtQxQhNRLoS6pwN55Xw~rdCtooG9hNs3UTssMoBmr2OJqWNSreLE83nHwYJlbPTOT0nSrDKvopyd2bwS7gzlkw7mTGCsbA5PVE8nNAkgwsvjEymUrLuCw3E1KG4yQKkeSaNvDAtOizZOZWwJw5uUyA-aJU1pDXKnm1XU7nisiIp7asUFaYiqvMdSM5HAdwK02e30NzGxKtiCDl5GVdryV-Qib2ahxBHv3L17B73636CaROeekJwPcSpOnm9gBAlf0t747jk4HbMKCKqSHchw__",
    "https://s3-alpha-sig.figma.com/img/6ea2/8ccf/1ea53edb90b65e5d33d48205a91a17a0?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AToDAdGeZwF14iaEePQcTSo3QNc-mhCY5GMDdETSdAcrSO3OM02q0KbsqpMuqoTXdDgRLhMn9JMuak8uBwkbP7zkp045zhnzR5KoujFpVjQf~Ivd4lavBa0vE8w~ioFA1DNsTC7dSo4dNqmykZmuPZi9sRh6wqFoPDhD2GUKAA0VoK-zMl5~1IogicEqW0R9yomC72Bl6MzGZsiD52K6TtiJvEiCxOl3LWKvs1hCul8yulkooq6kt2UOs9etFidHLCS9F2peVBeBS0LwvonBf0G5O7Wvk5Yzj3Kn3EQdG-fJ~vgJmu1FEMybO8StCaZwWxJVmLAo2jEyuvtUzS1s1A__",
  ];

  // State để lưu ảnh được chọn hiển thị ở hàng 2
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="container">
      {/* Hàng 2: Ảnh lớn hiển thị */}
      <div className="selected-image">
        <div className="written">
          <h2>Weather With You</h2>
          <p>
            {" "}
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.{" "}
          </p>
        </div>
        <div className="img"></div>
        <img src={selectedImage} alt="Selected" />
      </div>

      {/* Hàng 3: Danh sách ảnh nhỏ */}
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className="thumbnail"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Mid;
