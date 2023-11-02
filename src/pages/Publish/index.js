import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useSearchParams } from "react-router-dom";

const { Option } = Select;

const Publish = () => {
  //获取频道列表
  // const {chanelList} = useChannel()

  // 提交表单
  const onFinish = (values) => {};

  //上传回调

  //切换图片封面

  //回填数据

  //获取实例

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              // { title: `${articleId ? '编辑' : '发布'}文章` },
            ]}
          ></Breadcrumb>
        }
      ></Card>
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "请输入文章标题" }]}
      >
        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
      </Form.Item>
      <Form.Item
        label="频道"
        name="chanel_id"
        rules={[{ required: true, message: "请选择文章频道" }]}
      >
        <Select placeholder="请选择文章频道" style={{ width: 400 }}>
          {/* value属性用户选中之后会自动收集起来作为接口的提交字段 */}
          {/* {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)} */}
        </Select>
      </Form.Item>
      <Form.Item label="封面">
        <Form.Item label="type">
          <Radio.Group>
            <Radio value={1}>单图</Radio>
            <Radio value={2}>三图</Radio>
            <Radio value={3}>无图</Radio>
          </Radio.Group>
        </Form.Item>
        {/* 
            listType: 决定选择文件框的外观样式
            showUploadList: 控制显示上传列表
        */}
        {/* {imageType > 0 && <Upload
              listType="picture-card"
              showUploadList
              action={'http://geek.itheima.net/v1_0/upload'}
              name='image'
              onChange={onChange}
              maxCount={imageType}
              fileList={imageList}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>} */}
      </Form.Item>
      <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >
            {/* 富文本编辑器 */}
            {/* <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            /> */}
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>

    </div>
  );
};

export default Publish;
