export const processCSV = (csvData) => {
    const nodes = [];
    const edges = [];
    const position = {x: 0, y: 0};
    // Parse the CSV data
    const rows = csvData.split('\n');
    rows.forEach((row) => {
        if (row == "id,id parent,title") return;
        const columns = row.split(',');
        const id = columns[0].trim();
        const parentId = columns[1].trim();
        const title = columns[2].trim();
        // Create node object
        const node = {
            id: id,
            type: 'default',
            data: {label: title},
            position: position
        };
        // Create edge object
        if (parentId !== '0') {
            const edge = {
                id: `e${parentId}${id}`,
                source: parentId,
                target: id,
                type: 'smoothstep',
                animated: true
            };
            edges.push(edge);
        }
        nodes.push(node);
    })
    return {nodes, edges}
};
