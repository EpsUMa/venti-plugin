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
        logger.mark("收到加群申请" + this.e.logText + "，正在进行验证");
        logger.mark(this.e.comment);
        logger.mark(this.e.tips);
        logger.mark(this.e.flag);
        await this.e.approve(true)
    }
}