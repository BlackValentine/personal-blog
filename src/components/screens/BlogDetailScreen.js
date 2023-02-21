import React from 'react';
import avatar from '../../assets/images/avatar.jpeg';
import blog1 from '../../assets/images/blog2.jpg';

function BlogDetailScreen(props) {
  return (
    <div className="bg-ghost-white">
      <div className="container flex flex-col items-center">
        <div className="pt-30 mt-14 mx-auto text-5xl text-center">Lần đầu cho điều gì đó mới mẻ ...</div>
        <img
          className="lg:w-24 md:w-20 w-16 lg:h-24 md:h-20 h-16 rounded-full my-5"
          src={avatar}
          alt="author"
        />
        <div className="lg:text-base md:text-sm text-xs uppercase">By Black Valentine, Updated on 11/12/2023</div>
        <div className="lg:text-base md:text-sm text-xs my-5 text-spanish-gray">
          Hi everyone, đây là blog đầu tiên của mình trên trang cá nhân này. Mình tạo ra trang này khi mà đang chờ dự án mới từ công ty, đây sẽ là nơi mình có thể chia sẻ những cảm xúc, trải nghiệm của bản thân. Thật ra mình đã đã ấp ủ nó trong một thời gian dài, trước đây mình chỉ làm Frontend thôi, và nhiệm vụ chính của mình là tạo ra giao diện, còn để tạo ra được một trang blog hoàn chỉnh như thế này, mình cần sự trợ giúp từ phía Backend nữa. Vì vậy, khoảng 2 tuần trước, mình đã tự nói với bản thân: "Tại sao không tận dụng quãng thời gian tuyệt với này để học thêm một điều gì mới, và tạo ra một thứ dành riêng cho mình?". Và giờ chúng ta ở đây, welcome to my secret world :))
        </div>
        <div
          className="relative w-full pb-one-third rounded-2xl"
        >
          <img src={blog1} alt="blog-img" className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl"/>
        </div>
        <div
          className="blog-detail__content"
        // dangerouslySetInnerHTML={{ __html: `${blogData?.content}` }}
        >
          <h2>Hãy là người tự tay vẽ nên cuộc đời bạn.</h2>
          <p>Mình chưa bao giờ nghĩ rằng một ngày mình sẽ trở thành 1 lập trình viên, môn tin học từ những ngày cấp 3 cho đến cả khi mình học đại học trong mắt mình là một thứ gì đó khó khăn và nhàm chán. Vì vậy theo một lẽ đương nhiên, mình từ chối tiếp thu nó. Ngay cả những ngày cuối cùng ngồi trên giảng đường đại học, mình cũng từng đứng giữa 2 lựa chọn: học vẽ Auto CAD để trở thành 1 kỹ sư thiết kế, hay học lập trình để trở thành 1 anh coder may mắn, mình vẫn chọn phương án thứ 1. Và mình đã trở thành 1 kỹ sư trong vòng 4 năm sau khi ra trường như vậy đó, quyết định này đến bây giờ vẫn còn để lại cho mình khá nhiều điều tiếc nuối. Nếu mình quyết định với phương án thứ 2, biết đâu giờ mình đã trở thành 1 senior rồi :)) Tất nhiên là 4 năm này không phải vô dụng đối với mình, nó vẫn mang lại rất nhiều hành trang để tạo bước đà phát triển cho mình đến tận bây giờ, nó mang lại cho mình những người anh chị em tốt, những người đã giúp đỡ, dẫn dắt mình khi chập chững bước những bước đầu tiên từ cổng trường Bách Khoa ra.</p>
          <p>Trên con đường sự nghiệp của mình, cũng không thể quên 7 năm mình đi dạy toán. Hơn cả một công việc, những tiết dạy là khoảng thời gian mình có thể quên đi những khó khăn khi đi làm, nơi mình hướng dẫn những đứa em của mình cách để vượt qua nỗi sợ môn toán, thứ duy nhất đến thời điểm hiện tại mình cảm thấy mình đủ sức để dạy 1 ai đó. Tuy nhiên, diều mà mình nghĩ mình làm tốt trong mỗi tiết dạy không hẳn là kiến thức của mình vip pro no1, mà là những câu chuyện, những kinh nghiệm mà mình tích luỹ được khi học đại học, và cả khi lăn lộn trên con đường tìm kiếm một sự nghiệp mà mình nên cảm thấy tự hào khi mình 50 tuổi nữa ^^ Khi bạn học lớp 11 hay 12, bạn có tò mò về cuộc sống sinh viên không, hay xa hơn là cuộc sống của 1 người đi làm không? Mình có, nhưng mình không có một người thầy nào chia sẻ những điều đó khi mình 18 tuổi cả, mình chỉ biết học và học mà thôi. Nó giống như việc bạn đi trên 1 con đường mà không biết mình đang đi đâu vậy, bạn bỏ qua những sự điều thú vị trên con đường đó mà chỉ tập trung vào việc đi, mà sức người thì có hạn, đến 1 ngày bạn sẽ gục mà thôi.</p>
          <h2>Công việc mới, cuộc sống mới.</h2>
          <p>Công việc hiện tại của mình là 1 lập trình viên. Mình đã trải qua 2 năm trời với suy nghĩ bỏ việc để tìm 1 công việc mới. Mình tự lẩm bẩm với bản thân như một thằng điên trên đường đi làm và cả trên đường về nhà nữa. Thứ mà mình suy nghĩ nhiều nhất khi đó là: "Không phải bây giờ thì là bao giờ?". Mình bắt đầu lên những trang tuyển dụng để tìm việc nhưng khi mình tìm những công việc liên quan đến Engineering trên Vietnamwork, thứ đập vào mắt mình 90% là lập trình viên, Java, ReactJs ... chúng nó là thứ quái quỷ gì??? Mình muốn tìm công việc kỹ sư, không phải lập trình, mình không thích nó, mình cũng quá già để làm nó rồi.</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailScreen;