import plugin from '../../lib/plugins/plugin.js'
import { segment } from 'oicq'
export class Validation extends plugin {
    constructor() {
        super({
            name: '加群验证',
            dsc: '使用qq.alioth.zone or qq.ustc.life进行加群验证',
            event: 'request.group.add',
            priority: 5000
        })
    }
    async accept() {
        let uid = this.e.user_id;
        logger.mark("收到加群申请,正在进行验证");
        logger.mark(this.e.comment);
        //comment 为群验证问题
        logger.mark(this.e.tips);
        //tips表示验证问题答案
        logger.mark(this.e.flag);
        await this.e.approve(true)
        let code = this.e.tips.split('：')[1]
        logger.mark(code)
    }
}