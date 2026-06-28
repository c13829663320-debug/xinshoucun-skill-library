# 新手村 · SKILL LIBRARY 外部使用与投稿手册

搜索、安装、使用与提交 Agent Skill

| 适用对象 | 外部 Skill 使用者、内容贡献者、Codex 用户与 Claude Code 用户 |
| --- | --- |
| 版本信息 | v1.0 \| 2026-06-28 \| 新手村次元 / xinshoucun-skill-library |

## 一分钟认识

你可以直接搜索并安装已审核 Skill；也可以只创建一个标准化 Issue 投稿，无需 fork、clone、push 或自行创建 Pull Request。

## 一、按你的目标选择入口

| 目标 | 最短做法 |
| --- | --- |
| 搜索并使用 Skill | 打开展示页，输入任务关键词，选择 reviewed Skill，复制对应客户端的取用提示词。 |
| 不知道选哪个 | 复制页面上的 Agent 检索提示词，让 Codex 或 Claude Code 读取索引后推荐。 |
| 提交自己的 Skill | 打开外部 Agent 投稿表单，或让 Codex / Claude Code 只创建标准化 Issue。 |
| 反馈内容问题 | 在仓库创建普通 Issue，说明 Skill 名称、问题和复现方式。 |

Skill 展示页：[立即搜索 Skill](https://c13829663320-debug.github.io/xinshoucun-skill-library)
外部投稿入口：[打开外部 Agent 投稿表单](https://github.com/c13829663320-debug/xinshoucun-skill-library/issues/new?template=external_agent_submission.yml)

## 二、搜索 Skill

1. 打开新手村 Skill 共创库展示页。
2. 输入任务关键词，例如"破冰""分享会""户外""桌游""推文""社群"或"知识库"。
3. 查看标题、描述、分类、作者、标签和支持平台。
4. 默认只选择 status 为 reviewed 的 Skill。
5. 打开"完整目录"，检查 SKILL.md 以及 scripts、references、assets 等附带资源。

> **重要**：不要只下载 SKILL.md。一个可运行 Skill 可能依赖同目录中的脚本、参考资料、模板和客户端元数据。

## 三、不知道选哪个 Skill

把下面提示词交给 Codex 或 Claude Code，并在最后填写自己的任务：

```
请帮我从新手村 Skill 共创库检索适合当前任务的 Agent Skill。

索引地址：
https://raw.githubusercontent.com/c13829663320-debug/xinshoucun-skill-library/main/index/skills.json

仓库：
c13829663320-debug/xinshoucun-skill-library

先读取索引，只考虑 status 为 reviewed、category 不是"库维护工具"，
且 platforms 包含当前客户端的 Skill。
根据我接下来描述的任务，最多推荐 3 个，并说明名称、适用理由、
难度和目录。
不要立即安装；等我确认具体 Skill 后，再下载完整目录，
不能只复制 SKILL.md。

我的任务是：<在这里填写需求>
```

## 四、安装到 Codex

6. 在展示页找到目标 Skill，点击"复制 Codex 取用提示词"。
7. 把提示词交给 Codex，优先使用内置 skill-installer。
8. 安装整个 Skill 目录到 $CODEX_HOME/skills/<skill-name>/；未设置 CODEX_HOME 时使用 ~/.codex/skills/<skill-name>/。
9. 如果目标目录已存在，先确认差异，不要直接覆盖。
10. 安装后确认 SKILL.md 和附带资源存在，并重启 Codex。

### 通用 Codex 安装提示词

```
请安装并验证这个 Agent Skill：

仓库：c13829663320-debug/xinshoucun-skill-library
分支：main
目录：skills/<分类目录>/<skill-name>

优先使用 Codex 内置的 skill-installer；如果不可用，再从 GitHub 下载。
必须复制整个 Skill 目录及其所有子目录，不要只复制 SKILL.md。
安装到 $CODEX_HOME/skills/<skill-name>；未设置 CODEX_HOME 时使用
~/.codex/skills/<skill-name>。
如果目标目录已存在，不要覆盖，先告诉我。
安装完成后检查 SKILL.md，并提醒我重启 Codex。
```

## 五、安装到 Claude Code

11. 在展示页找到目标 Skill，点击"复制 Claude Code 取用提示词"。
12. 用户级安装到 ~/.claude/skills/<skill-name>/。
13. 需要项目成员共享时，安装到项目的 .claude/skills/<skill-name>/。
14. 只下载目标 Skill 的完整目录，不必为了一个 Skill 克隆整个仓库。
15. 安装后检查附带资源并重新加载 Claude Code。

### 通用 Claude Code 安装提示词

```
请从 GitHub 安装并验证这个 Agent Skill：

仓库：c13829663320-debug/xinshoucun-skill-library
分支：main
目录：skills/<分类目录>/<skill-name>
目标目录：~/.claude/skills/<skill-name>

只下载该 Skill 的完整目录，不要为了安装一个 Skill 克隆整个仓库。
必须保留 scripts、references、assets 等子目录，不能只复制 SKILL.md。
如果目标目录已存在，不要覆盖，先告诉我。
安装完成后检查 SKILL.md，并提醒我重新加载 Claude Code。
```

## 六、安装后验证

- 目标目录中存在 SKILL.md。
- scripts、references、assets 等目录没有遗漏。
- 客户端已经重启或重新加载。
- 用自然语言描述对应任务，观察 Skill 是否被触发。
- 需要强制触发时，在任务中明确写出 Skill 名称。

## 七、外部投稿规则

> **外部投稿只创建 Issue**：系统会把合格 Issue 转换为 Draft PR，新手村维护者负责审核、修改和决定是否收录。

### 严格限制

- 不 fork 仓库。
- 不 clone 仓库。
- 不创建分支。
- 不 push 代码。
- 不直接创建 Pull Request。
- Issue 标题必须以 [Skill] 开头。
- 使用 Agent 创建时，正文必须使用"### 字段名"格式。

### 允许的投稿方式

| 方式 | 投稿方式字段 | 适合人群 |
| --- | --- | --- |
| 网页表单 | external-manual | 希望直接填写 GitHub 表单的贡献者。 |
| Codex | external-codex | 希望让 Codex 整理内容并创建 Issue。 |
| Claude Code | external-claude-code | 希望让 Claude Code 整理内容并创建 Issue。 |

## 八、网页投稿

16. 登录 GitHub，打开"外部 Agent 投稿"表单。
17. 填写标题、英文 ID、分类、作者或公开署名、来源、标签和难度。
18. 写清适用场景、使用步骤、Prompt 示例、注意事项和案例。
19. 不确定的信息填写"需进一步核查"，不要编造。
20. 提交后保留 Issue 链接，等待工作流和维护者反馈。

投稿表单：[打开外部 Agent 投稿](https://github.com/c13829663320-debug/xinshoucun-skill-library/issues/new?template=external_agent_submission.yml)

## 九、使用 Codex 投稿

```
请审查并整理我提供的 Agent Skill，然后只通过 GitHub Issue 投稿到
c13829663320-debug/xinshoucun-skill-library。

不要 fork、clone、push、创建分支或创建 Pull Request。
先检查 gh auth status。将正文写入 issue-body.md，使用仓库要求的
三级标题字段：Skill 标题、Skill 英文 ID、分类、作者 / 公开署名、
原始提供者、素材来源、整理人、GitHub 用户名、标签、难度、
适用场景、使用步骤、Prompt 示例、注意事项、案例、公开状态、投稿方式。

投稿方式固定写 external-codex；标题必须以 [Skill] 开头。
缺少非核心来源字段时保留为空或写"需进一步核查"，不要编造。
创建 Issue 后只返回 URL，并停止，不要直接改仓库。
```

## 十、使用 Claude Code 投稿

```
请把我接下来提供的 Agent Skill 整理成新手村 Skill 共创库的
标准化 GitHub Issue。

仓库是 c13829663320-debug/xinshoucun-skill-library。
只允许创建 Issue，不要 fork、clone、push 或创建 Pull Request。
先运行 gh auth status。然后生成 issue-body.md，必须使用三级标题并依次
包含：Skill 标题、Skill 英文 ID、分类、作者 / 公开署名、原始提供者、
素材来源、整理人、GitHub 用户名、标签、难度、适用场景、使用步骤、
Prompt 示例、注意事项、案例、公开状态、投稿方式。

投稿方式固定写 external-claude-code，Issue 标题以 [Skill] 开头。
最后运行 gh issue create --repo c13829663320-debug/xinshoucun-skill-library
--title "[Skill] <Skill 标题>" --body-file issue-body.md。
不要执行其他 GitHub 写操作，成功后只输出 Issue URL。
```

## 十一、提交后会发生什么

21. Skill submission to PR 工作流解析 Issue。
22. 系统创建或更新 skill-submission/issue-<编号> 分支。
23. 系统创建 Draft PR，并运行仓库校验。
24. 维护者检查内容、来源、公开风险、重复度和客户端兼容性。
25. 维护者可能要求补充，完成修改后合并；不合适的投稿会被关闭。

> **编辑方式**：需要补充时编辑原 Issue。系统应更新同一分支和同一 Draft PR，不会重复创建新的 PR。

## 十二、常见问题

| 问题 | 处理方法 |
| --- | --- |
| Action 未运行 | 确认标题以 [Skill] 开头；仍无运行时联系维护者。 |
| 首次投稿等待审批 | 这是 GitHub 首次贡献者安全机制，等待维护者检查并批准 workflow。 |
| 解析失败 | 检查字段标题是否使用 ###，以及标题、分类、作者、场景和步骤是否齐全。 |
| 英文 ID 失败 | 只使用小写字母、数字和连字符；不要包含 anthropic 或 claude。 |
| 分类失败 | 使用活动策划、内容创作、社群运营、知识管理、AI 工具。 |
| CI 通过但未合并 | CI 只验证结构；是否收录仍由维护者审核决定。 |
| 找不到新 Skill | 确认该 Skill 已合并、status 为 reviewed，并等待 Pages 部署完成。 |

## 十三、关键入口

Skill 展示页：[https://c13829663320-debug.github.io/xinshoucun-skill-library](https://c13829663320-debug.github.io/xinshoucun-skill-library)
仓库主页：[https://github.com/c13829663320-debug/xinshoucun-skill-library](https://github.com/c13829663320-debug/xinshoucun-skill-library)
外部投稿表单：[https://github.com/c13829663320-debug/xinshoucun-skill-library/issues/new?template=external_agent_submission.yml](https://github.com/c13829663320-debug/xinshoucun-skill-library/issues/new?template=external_agent_submission.yml)
Issue 入口：[https://github.com/c13829663320-debug/xinshoucun-skill-library/issues/new/choose](https://github.com/c13829663320-debug/xinshoucun-skill-library/issues/new/choose)
机器可读索引：[https://raw.githubusercontent.com/c13829663320-debug/xinshoucun-skill-library/main/index/skills.json](https://raw.githubusercontent.com/c13829663320-debug/xinshoucun-skill-library/main/index/skills.json)
