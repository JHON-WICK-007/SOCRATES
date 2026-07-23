FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 7860
ENV HOST=0.0.0.0
ENV PORT=7860
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "7860"]
