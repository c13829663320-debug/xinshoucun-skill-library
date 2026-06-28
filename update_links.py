import os

base = r'C:\temp-skill-lib'
files_to_update = [
    'index/skills.json',
    'docs/external-skill-usage.md',
]

for f in files_to_update:
    path = os.path.join(base, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    content = content.replace('nvd-skill-library/xinshoucun-skill-library', 'c13829663320-debug/xinshoucun-skill-library')
    content = content.replace('nvd-skill-library.github.io', 'c13829663320-debug.github.io/xinshoucun-skill-library')
    content = content.replace('raw.githubusercontent.com/nvd-skill-library', 'raw.githubusercontent.com/c13829663320-debug')
    with open(path, 'w', encoding='utf-8') as fh:
        fh.write(content)
    print(f'Updated: {f}')

print('All done!')
