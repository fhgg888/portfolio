'use strict';

// All paths are relative so this site works at both username.github.io and /repository/.
const imagePath = 'assets/images/';
const videoPath = 'assets/videos/';
const email = 'JayWufhgg888@163.com';

const demos = [
  { id: 'force-wiping', title: '力控擦黑板', subtitle: 'ForceVLA · 接触力与柔顺跟随', type: 'FORCE CONTROL', poster: 'force-wiping-poster.webp' },
  { id: 'rtc-boxes', title: 'Training RTC 叠盒子', subtitle: 'π0.5 · 实时执行与阶段结构', type: 'REAL-TIME POLICY', poster: 'rtc-boxes-poster.webp' },
  { id: 'rlt-unplugging', title: '在线强化学习拔网线', subtitle: 'RLT · 从真机交互中改进策略', type: 'REINFORCEMENT LEARNING', poster: 'rlt-unplugging-poster.webp' },
  { id: 'memory-flowers', title: '记得之前，才能继续', subtitle: 'NativeMEM · 长程记忆插花', type: 'LONG-TERM MEMORY', poster: 'memory-flowers-poster.webp' },
  { id: 'subtask-blocks', title: '一步一步，搭起积木', subtitle: 'Subtask · 多阶段操作', type: 'MULTI-STAGE TASK', poster: 'subtask-blocks-poster.webp' },
  { id: 'tactile-capture', title: '看见触觉的变化', subtitle: '电子皮肤 · 高速信号采集', type: 'TACTILE SENSING', poster: 'tactile-capture-poster.webp' },
  { id: 'rsa', title: 'RSA 延迟纠偏', subtitle: '异步推理 · 最新观测下的动作修正', type: 'LATENCY-AWARE VLA', poster: 'rsa-poster.webp' },
  { id: 'cucumber', title: '力觉闭环削黄瓜', subtitle: 'ForceVLA · 接触密集型操作', type: 'FORCE CONTROL', poster: 'cucumber-poster.webp' },
  { id: 'folding', title: '双臂协作叠衣服', subtitle: 'π0.5 · 柔性物体操作', type: 'BIMANUAL MANIPULATION', poster: 'folding-poster.webp' },
  { id: 'unplugging', title: '拔插座', subtitle: 'π0.5 · 真机策略部署', type: 'REAL-WORLD POLICY', poster: 'unplugging-poster.webp' },
  { id: 'rlt-insertion', title: 'RLT 套柱任务', subtitle: '强化学习 · 提升策略成功率', type: 'REINFORCEMENT LEARNING', poster: 'rlt-insertion-poster.webp' },
  { id: 'language-grasp', title: '听懂指令，找到物体', subtitle: 'VLM + 深度相机 + IK · 语言抓取', type: 'LANGUAGE TO ACTION', poster: 'language-grasp-poster.webp' },
  { id: 'navigation', title: '宇树 G1 语言导航', subtitle: 'InternVLN 复现 · 视觉语言导航', type: 'VISION-LANGUAGE NAVIGATION', poster: 'navigation-poster.webp' },
  { id: 'so101', title: '自己搭建的 SO101', subtitle: '软硬件全栈复现 · ACT 策略', type: 'LEARNING BY BUILDING', poster: 'so101-poster.webp' },
  { id: 'tactile-grasp', title: '触觉夹爪拿铅笔芯', subtitle: '柔性电子皮肤 · 精细物体抓取', type: 'TACTILE MANIPULATION', poster: 'tactile-grasp-poster.webp' },
  { id: 'handwriting', title: '手写轨迹与触觉信号', subtitle: 'GRASP · 真人手写数据采集', type: 'DYNAMIC BIOMETRICS', poster: 'handwriting-poster.webp' },
  { id: 'butterfly', title: '一只亲手做的蝴蝶', subtitle: '从结构设计到仿生运动', type: 'BIONIC BUTTERFLY', poster: 'butterfly-poster.webp' },
  { id: 'snake', title: '仿生蛇', subtitle: '关节联动与仿生运动', type: 'BIONIC ROBOT', poster: 'snake-poster.webp' },
  { id: 'worm', title: '仿生线虫', subtitle: '对微小运动的工程探索', type: 'BIONIC MOTION', poster: 'worm-poster.webp' },
  { id: 'desktop-robot', title: '桌面上的小机器人', subtitle: '个人兴趣 · 硬件小作品', type: 'SIDE PROJECT', poster: 'desktop-robot-poster.webp' },
  { id: 'ecg', title: '实时心电监测', subtitle: '生物电信号采集与可视化', type: 'BIOSIGNAL SENSING', poster: 'ecg-poster.webp' },
];

const projects = {
  rsa: {
    title: 'RSA：让动作跟上此刻',
    eyebrow: 'RECTIFY STALE ACTION',
    lead: 'Latency-Aware Async Inference for Vision-Language-Action。面向 VLA 推理延迟，在不重新训练策略主干的前提下，用最新观测纠正过时动作。',
    meta: ['第一作者 · ICRA 2027 在投', '2026.03 — 2026.09', '北京小雨智造 · 实习研究'],
    image: 'rsa-method.webp', imageAlt: 'RSA 异步推理、纠偏与动作执行的系统流程',
    sections: [
      { title: '问题：模型返回时，世界已经变了', text: 'VLA 的端到端推理通常需要约 80–120 ms。异步推理保证机器人持续运动，但基于旧观测生成的动作返回时，机器人与环境已经变化。单纯平滑轨迹不能重新对齐动作意图。' },
      { title: '方法：在交接点纠正动作', bullets: ['冻结完成 SFT 的 VLA，外挂独立的轻量 DiT 纠偏器。重型策略保持异步，在动作块交接时读取最新观测，短暂同步等待纠偏，再执行完整纠偏动作块。', '复用原 SFT 数据，随机采样延迟，并用共享采样噪声配对旧观测动作与新观测 teacher 动作。通过受薛定谔桥视角启发的 Brownian-bridge endpoint matching 学习两者之间的映射。', '处理动作块 padding、episode 边界与异步调度，兼顾方法验证与真实执行链路。'] },
      { title: '实验观察', text: 'Kinetix 在 Δ = 4 的延迟设置下，RSA 成功率为 76.8%，RTC 为 61.8%，Naive Async 为 49.0%。Agilex Piper 双臂真机中，移动目标任务成功 19/20 次，叠盒子成功 15/20 次。下列纠偏耗时是在 RTX 4090 上采用五步采样的端到端结果。' },
    ],
    metrics: [['~5 ms', 'RTX 4090 · 五步纠偏'], ['19 / 20', '双臂移动目标任务'], ['15 / 20', '双臂叠盒子任务']],
    videos: ['rsa'],
    link: { href: 'https://fhgg888.github.io/RSA_demo/rsa_chunk_timing.html', text: '探索 RSA 动作时序交互演示' },
    source: '简历第 1 页；作品集第 2–5 页。实验指标对应材料中的特定平台与任务设置。',
  },
  force: {
    title: 'ForceVLA：让机器人感知接触', eyebrow: 'FORCE-AWARE VISION–LANGUAGE–ACTION',
    lead: '围绕 openpi / π0.5，探索力觉信息如何进入策略模型，并将预测结果接入 UR7e 双臂机器人的导纳控制。',
    meta: ['VLA 算法与真机部署', '2026.03 — 2026.09', '北京小雨智造 · 实习项目'],
    image: 'force-method.webp', imageAlt: 'ForceVLA 的特征融合与未来力预测模型结构',
    sections: [
      { title: '问题：仅靠视觉，难以判断接触力度', text: '原生状态主要包含位姿与夹爪信息，强接触任务中容易动作过猛或过轻。单帧力信号噪声较大，且无法反映接触变化趋势。' },
      { title: '方法：力历史、联合预测与闭环执行', bullets: ['比较 Force0.5 后置特征融合与 Tac0.5 注意力内融合：前者通过 LIMoE 融合实测力与视觉语言特征，后者将 tactile tokens 接入动作专家。', '使用因果时序卷积与可学习查询交叉注意力，将过去 30 帧力 / 力矩压缩为 4 个 token；对 Tac0.5 的力 token 输出投影与模态嵌入使用零初始化。', '以联合 Flow Matching 同时生成动作块与双臂 12 维未来力 / 力矩轨迹。通过 VLM 阶段预测头判断是否需要力修正，为 Z 轴导纳控制提供阶段信号。'] },
      { title: '真机验证', text: '在擦黑板任务中实现柔顺跟随与稳定接触；通过插孔与削黄瓜等任务验证力觉闭环。材料报告了相对纯视觉基线的改进，未提供统一的量化成功率，因此这里以实际演示呈现。' },
    ], videos: ['force-wiping', 'cucumber'],
    source: '简历第 1 页；作品集第 6–9 页。',
  },
  pi: {
    title: 'π0.5：从数据到真机', eyebrow: 'END-TO-END ROBOT LEARNING',
    lead: '以 π0.5 为基础，贯通数据、控制、后训练和真机强化学习，并针对多阶段任务与长程记忆分别扩展。',
    meta: ['全栈复现与工程优化', '2026.03 — 2026.09', '北京小雨智造 · 实习项目'],
    image: 'deployment.webp', imageAlt: '真机控制 Web Console 与多视角观测',
    sections: [
      { title: '从数据处理到实时控制', bullets: ['DAR 动态动作重采样按信息弧长分配动作步数，用夹爪事件、路径点等构造信息量，结合硬锚点与 PCHIP 插值保留关键变化。', '在 MIT 控制中加入重力补偿与线性外推，减少阶梯突变导致的速度差分脉冲；实现 Web Console，连接策略推理、机器人执行与多视角观测。', '引入 RECAP 后训练、RTC 推理与 Training RTC 复现，探索控制延迟下的稳定执行。'] },
      { title: '真机强化学习', text: '在 Aloha 套柱任务中，对比 RLT、DSRL、VINE、Flow-SDE：基线成功率约 10%，RLT 达到 80% 以上。在 UR5 拔网线任务中，在线 RLT 将成功率从 30–40% 提升至 90% 以上，单次 episode 时间由约 30 秒缩短至约 20 秒。不同任务与算法的数字不作跨平台比较。' },
      { title: '两条独立扩展：阶段结构与长程记忆', text: 'Subtask 显式区分叠盒子、搭积木的子阶段；NativeMEM 则参考两阶段训练，为插花任务引入对早期视觉帧的记忆。二者分别解决任务阶段切换和历史信息依赖。' },
    ], metrics: [['80%+', 'Aloha 套柱 · RLT'], ['90%+', 'UR5 拔网线 · 在线 RLT'], ['~30 → 20 s', '拔网线单次 episode 时间']],
    videos: ['rtc-boxes', 'rlt-insertion', 'rlt-unplugging', 'subtask-blocks', 'memory-flowers', 'folding', 'unplugging'],
    source: '简历第 2 页；作品集第 10–17 页。百分比为个人实验报告，未附各项完整试验次数。',
  },
  grasp: {
    title: 'GRASP：读懂触觉的更多维度', eyebrow: 'FIVE-DIMENSIONAL ELECTRONIC SKIN',
    lead: '从柔性电子皮肤的采集电路到实时运动学解耦，建立连接硬件、触觉数据与动态生物识别的完整系统。',
    meta: ['第一作者（共同贡献）· Nature Sensors 在投', '2024.12 — 2026.07', 'FPGA / STM32 / PCB / 算法全栈设计'],
    image: 'tactile-system.webp', imageAlt: 'GRASP 电子皮肤、Zynq 与信号调理及采集电路',
    sections: [
      { title: '硬件底座', text: '针对高串扰和低采样率问题，基于 Zynq-7020 研发 GRASP 系统，融合 PZPM 与 FDM，实现 2,000 Hz 采集，连接柔性压力传感阵列与数字处理链路。' },
      { title: '从触觉信号到动态特征', text: '围绕手写轨迹提取压力、方向、速度、加速度与频率五维特征，构建采集、运动学解耦、深度学习识别及消融验证流程；进一步演示了电子皮肤与机器人夹爪、灵巧手的结合。' },
      { title: '我的工作', text: '负责 FPGA / Zynq 与 STM32 开发、PCB 设计、3D 建模、手写运动学解耦算法及深度学习模型。项目覆盖从原始信号到最终识别结果的完整链路。' },
    ], metrics: [['2,000 Hz', '系统采样率'], ['5 维', '手写动态特征'], ['全栈', '采集电路 → 信号 → 识别']],
    videos: ['tactile-capture', 'handwriting', 'tactile-grasp'],
    source: '简历第 2 页；作品集第 18–23 页；GRASP 论文稿件。仅展示各材料一致的指标。',
  },
  adc: {
    title: '32 通道采集：把感知做成硬件', eyebrow: '32-CHANNEL DATA ACQUISITION',
    lead: '从电子皮肤采集系统的需求出发，设计一块可连接嵌入式与 FPGA 平台的多通道采集硬件。',
    meta: ['个人硬件设计与驱动开发', 'AD7606 · STM32F103C8T6 · FPGA'],
    image: 'tactile-board.webp', imageAlt: '32 通道 AD7606 采集板的 PCB 设计',
    sections: [
      { title: '工程实现', text: '完成 32 通道 AD7606 采集板设计，并编写 STM32F103C8T6 与 FPGA 对应驱动。项目作为 FDM 电子皮肤研究之外的硬件扩展，用于继续探索多通道信号采集。' },
      { title: '把系统知识落实到电路', text: '将传感器需求转换为采集接口、PCB 与驱动，通过实际板卡连接信号和算法，持续积累从原理设计到嵌入式实现的经验。' },
    ], source: '作品集第 23 页。',
  },
  taste: {
    title: '人工重构味觉神经通路', eyebrow: 'AN ELECTRONIC RECONSTRUCTED GUSTATORY NERVE PATHWAY',
    lead: '面向味觉重建，连接传感器采集、边缘识别、电刺激与脑电解码。我的工作集中在采集电路、边缘计算识别和脑电算法。',
    meta: ['共同作者 · Nature 在投', '2025.09 — 2026.05', '采集电路与识别算法'],
    image: 'gustatory.webp', imageAlt: '人工味觉系统的实验装置',
    sections: [
      { title: '前端感知与边缘识别', text: '设计味觉传感器采集电路，对酸、甜、苦、咸、鲜五种基础味觉进行分类，并把识别模型部署到边缘设备。' },
      { title: '神经通路闭环与脑电解码', text: '项目将识别结果转化为特定频率的电刺激，连接神经突触电路与定制电极。我负责基于注意力机制的脑电识别模型，用于分析真实味觉刺激与电刺激诱发的脑电响应。' },
    ], source: '简历第 2 页；作品集第 24 页。作者身份采用简历中的共同作者表述。',
  },
};

const dialog = document.getElementById('detail-dialog');
const dialogContent = document.getElementById('dialog-content');
const demoGrid = document.getElementById('demo-grid');
let returnFocus = null;
let toastTimer;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function renderDemos(expanded = false) {
  demoGrid.innerHTML = demos.map((demo, index) => `
    <button class="demo-card" type="button" data-video="${demo.id}" ${index >= 6 && !expanded ? 'hidden' : ''} aria-label="播放：${escapeHtml(demo.title)}">
      <div class="demo-thumb"><img src="${imagePath}${demo.poster}" alt="${escapeHtml(demo.title)}的演示画面" width="640" height="400" loading="lazy"><span class="demo-type">${demo.type}</span><span class="demo-play" aria-hidden="true">▶</span></div>
      <div class="demo-title">${escapeHtml(demo.title)}<span aria-hidden="true">↗</span></div><span class="demo-subtitle">${escapeHtml(demo.subtitle)}</span>
    </button>`).join('');
}

function prepareDialog(trigger) {
  const previousVideo = dialog.querySelector('video');
  if (previousVideo) previousVideo.pause();
  if (!dialog.open) returnFocus = trigger || document.activeElement;
}

function displayDialog() {
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus({ preventScroll: true });
}

function openProject(id, trigger) {
  const project = projects[id];
  if (!project) return;
  prepareDialog(trigger);
  dialogContent.innerHTML = `
    <div class="dialog-header"><p class="eyebrow">${escapeHtml(project.eyebrow)}</p><h2 id="dialog-title">${escapeHtml(project.title)}</h2><p class="dialog-lead">${escapeHtml(project.lead)}</p><div class="dialog-meta">${project.meta.map(item => `<span>${escapeHtml(item)}</span>`).join('')}</div></div>
    <img class="dialog-hero" src="${imagePath}${project.image}" alt="${escapeHtml(project.imageAlt)}">
    <div class="dialog-sections">
      ${project.sections.map(section => `<section class="detail-section"><h3>${escapeHtml(section.title)}</h3>${section.text ? `<p>${escapeHtml(section.text)}</p>` : `<ul>${section.bullets.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`}</section>`).join('')}
      ${project.metrics ? `<div class="result-list">${project.metrics.map(([value, label]) => `<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('')}</div>` : ''}
      ${project.videos ? `<section class="detail-section"><h3>真机演示</h3><div class="detail-videos">${project.videos.map(videoId => `<button type="button" data-video="${videoId}" data-parent-project="${id}"><span aria-hidden="true">▶</span>${escapeHtml(demos.find(demo => demo.id === videoId).title)}</button>`).join('')}</div></section>` : ''}
      ${project.link ? `<a class="text-link detail-external" href="${project.link.href}" target="_blank" rel="noopener">${escapeHtml(project.link.text)} <span aria-hidden="true">↗</span></a>` : ''}
      <p class="detail-source">来源：${escapeHtml(project.source)}</p>
    </div>`;
  displayDialog();
}

function openVideo(id, trigger, fromProject = null) {
  const demo = demos.find(item => item.id === id);
  if (!demo) return;
  prepareDialog(trigger);
  dialogContent.innerHTML = `
    <div class="dialog-header">${fromProject ? `<button type="button" class="video-back" data-project="${fromProject}">← 返回项目详情</button>` : ''}<p class="eyebrow">${demo.type}</p><h2 id="dialog-title">${escapeHtml(demo.title)}</h2><p class="dialog-lead">${escapeHtml(demo.subtitle)}</p></div>
    <div class="video-container"><video controls playsinline preload="metadata" poster="${imagePath}${demo.poster}" aria-label="${escapeHtml(demo.title)}"><source src="${videoPath}${demo.id}.mp4" type="video/mp4">你的浏览器不支持内嵌视频，请使用下方链接打开。</video><p class="video-footnote">个人项目实机记录 · <a href="${videoPath}${demo.id}.mp4" target="_blank" rel="noopener">单独打开视频 ↗</a></p></div>`;
  displayDialog();
}

function closeDialog() { dialog.close(); }

dialog.addEventListener('close', () => {
  // A queued close event must not clear a dialog that has already been reopened.
  if (dialog.open) return;
  const video = dialog.querySelector('video');
  if (video) {
    video.pause();
    video.querySelectorAll('source').forEach(source => source.removeAttribute('src'));
    video.removeAttribute('src');
    video.load();
  }
  document.body.classList.remove('modal-open');
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
});
dialog.querySelector('.dialog-close').addEventListener('click', closeDialog);
let pointerStartedOutside = false;
function isOutsideDialog(event) {
  const bounds = dialog.getBoundingClientRect();
  return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
}
dialog.addEventListener('pointerdown', event => { pointerStartedOutside = event.target === dialog && isOutsideDialog(event); });
dialog.addEventListener('click', event => { if (event.target === dialog && pointerStartedOutside && isOutsideDialog(event)) closeDialog(); });

document.addEventListener('click', event => {
  const projectButton = event.target.closest('[data-project]');
  if (projectButton) openProject(projectButton.dataset.project, projectButton);
  const videoButton = event.target.closest('[data-video]');
  if (videoButton) openVideo(videoButton.dataset.video, videoButton, videoButton.dataset.parentProject || null);
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let count = 0;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('.project-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.hidden = !show;
      if (show) count++;
    });
    document.getElementById('project-count').textContent = `${count} 个项目`;
  });
});

document.getElementById('more-demos').addEventListener('click', event => {
  const button = event.currentTarget;
  const expanded = button.getAttribute('aria-expanded') !== 'true';
  const beforeTop = button.getBoundingClientRect().top;
  renderDemos(expanded);
  button.setAttribute('aria-expanded', String(expanded));
  button.innerHTML = expanded ? '收起更多演示 <span aria-hidden="true">−</span>' : '展开全部演示 <span aria-hidden="true">＋</span>';
  if (!expanded) window.scrollBy({ top: button.getBoundingClientRect().top - beforeTop, behavior: 'instant' });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.getElementById('site-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '打开导航');
  siteNav.classList.remove('open');
}
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.setAttribute('aria-label', expanded ? '关闭导航' : '打开导航');
  siteNav.classList.toggle('open', expanded);
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

function toast(message) {
  const element = document.getElementById('toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 2800);
}

document.getElementById('copy-email').addEventListener('click', async () => {
  try {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
    } else {
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('aria-label', '联系邮箱');
      input.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(input);
      input.select();
      const copied = document.execCommand('copy');
      input.remove();
      document.getElementById('copy-email').focus({ preventScroll: true });
      if (!copied) throw new Error('Clipboard unavailable');
    }
    toast('邮箱已复制，期待交流！');
  } catch {
    toast('请长按或选中邮箱地址复制');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
renderDemos();
