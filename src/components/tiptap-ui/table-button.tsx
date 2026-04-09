import React from "react"
import { useEditorContext } from "@tiptap/react"
import { Button } from "@/components/tiptap-ui-primitive/button"
import { TableIcon } from "@/components/tiptap-icons/table-icon"

export const TableButton: React.FC = () => {
  const { editor } = useEditorContext()

  if (!editor) return null

  return (
    <Button
      variant="ghost"
      className="tiptap-toolbar-button"
      onClick={() =>
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run()
      }
      title="Insert Table"
    >
      <TableIcon className="tiptap-button-icon" />
    </Button>
  )
}
