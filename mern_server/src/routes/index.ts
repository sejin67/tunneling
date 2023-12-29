import express, { Request, Response } from 'express';
import infosController from '../controllers/infosController';
import searchController from '../controllers/searchController';
import underwayInfosController from '../controllers/underwayInfosController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'health check!!',
  });
});

//위치 데이터 저장 router
router.post('/infos', infosController.createInfo);

//전체 위치 데이터 조회
router.get('/infos', infosController.getInfos);

//키워드 검색
router.get('/search', searchController.searchKeyword);

// 추가: 지하차도 정보 조회
router.get('/getUnderwayInfos', underwayInfosController.getUnderwayInfos);

export default router;
