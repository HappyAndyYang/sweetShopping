import { parse } from 'url';

const productMenu = {
  status: 200,
  message: '获取产品菜单成功',
  data: {
    devices: [{
      deviceName: '负载车',
      deviceNum: 1,
    }, {
      deviceName: '浇灌车',
      deviceNum: 2,
    }, {
      deviceName: '移栽机',
      deviceNum: 3,
    }],
    products: [{
      productName: '点甜亲研梨',
      productNum: 4,
    }, {
      productName: '露天西瓜',
      productNum: 5,
    }, {
      productName: '无害水稻',
      productNum: 6,
    }],
    decs: [{
      key: 1,
      deviceDecs: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
      + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
      + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
      + 'voluptates soluta. Vel!',
      deviceImg: '/product.jpg',
      productDecs: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
      + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
      + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
      + 'voluptates soluta. Vel!',
      productImg: '/product.jpg',
    }, {
      key: 2,
      deviceDecs: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
      + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
      + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
      + 'voluptates soluta. Vel!',
      productDecs: '4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
      + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
      + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
      + 'voluptates soluta. Vel!',
    }, {
      key: 3,
      deviceDecs: '5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
      + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
      + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
      + 'voluptates soluta. Vel!',
      productDecs: '6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
      + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
      + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
      + 'voluptates soluta. Vel!',
    }],
  },
};

function getProductDetail(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;
  const { flag } = params;

  console.log('params=>', flag);
  let dataSource = {};
  const decs = [{
    key: 1,
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
    + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
    + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
    + 'voluptates soluta. Vel!',
    img: '/product.jpg',
  }, {
    key: 2,
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
    + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
    + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
    + 'voluptates soluta. Vel!',
  }, {
    key: 3,
    decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor quas inventore hic delectus, '
    + 'temporibus vel voluptate nemo, repellat eaque nostrum ducimus numquam repudiandae nam. Quibusdam quaerat aspernatur commodi '
    + 'accusantium obcaecati pariatur vel eos quas vero quae rerum nemo nihil non laborum labore magni numquam adipisci voluptatum, '
    + 'voluptates soluta. Vel!',
  }];

  switch (flag) {
    case '1':
      dataSource = {
        status: 200,
        message: '获取产品详单成功',
        data: {
          decs,
          title: '负载车',
        },
      };
      break;
    case '2':
      dataSource = {
        status: 200,
        message: '获取产品详单成功',
        data: {
          decs,
          title: '浇灌车',
        },
      };
      break;
    default:
      break;
  }

  return res.json(dataSource);
}

function updatePersonalInfo(req, res, u, b) {
  const body = (b && b.body) || req.body;
  console.log('body => ', body);
  res.send({
    status: 200,
    message: '更新个人信息成功',
    data: {
      userId: 1,
    },
  });
}

export default {
  'POST /login': (req, res) => {
    const { password, userName } = req.body;
    if (password === '888888' && userName === 'admin') {
      res.send({
        status: 200,
        message: '登录成功',
        data: {
          userName,
          userId: 1,
        },
      });
      return;
    }
    res.send({
      status: 2,
      message: '登录失败',
      data: {
        userName,
      },
    });
  },

  'POST /register': (req, res) => {
    const { userName } = req.body;
    res.send({
      status: 200,
      message: '注册成功',
      data: {
        userName,
        userId: 1,
      },
    });
  },

  'POST /forget': (req, res) => {
    const { userName } = req.body;
    res.send({
      status: 200,
      message: '找回密码成功',
      data: {
        userName,
        userId: 1,
      },
    });
  },

  'POST /connect': (req, res) => {
    res.send({
      status: 200,
      message: '消息发送成功',
      data: {},
    });
  },

  'GET /productIndex': productMenu,
  'GET /productDetail': getProductDetail,
  'POST /updatePersonal': updatePersonalInfo,
};
